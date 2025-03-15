goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31729 = (function (f,blockable,meta31730){
this.f = f;
this.blockable = blockable;
this.meta31730 = meta31730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31731,meta31730__$1){
var self__ = this;
var _31731__$1 = this;
return (new cljs.core.async.t_cljs$core$async31729(self__.f,self__.blockable,meta31730__$1));
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31731){
var self__ = this;
var _31731__$1 = this;
return self__.meta31730;
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31730","meta31730",-1159809662,null)], null);
}));

(cljs.core.async.t_cljs$core$async31729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31729");

(cljs.core.async.t_cljs$core$async31729.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31729.
 */
cljs.core.async.__GT_t_cljs$core$async31729 = (function cljs$core$async$__GT_t_cljs$core$async31729(f,blockable,meta31730){
return (new cljs.core.async.t_cljs$core$async31729(f,blockable,meta31730));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31713 = arguments.length;
switch (G__31713) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31729(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31781 = arguments.length;
switch (G__31781) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31791 = arguments.length;
switch (G__31791) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31805 = arguments.length;
switch (G__31805) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36067 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36067) : fn1.call(null, val_36067));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36067) : fn1.call(null, val_36067));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31823 = arguments.length;
switch (G__31823) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___36188 = n;
var x_36190 = (0);
while(true){
if((x_36190 < n__5593__auto___36188)){
(a[x_36190] = x_36190);

var G__36200 = (x_36190 + (1));
x_36190 = G__36200;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31843 = (function (flag,meta31844){
this.flag = flag;
this.meta31844 = meta31844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31845,meta31844__$1){
var self__ = this;
var _31845__$1 = this;
return (new cljs.core.async.t_cljs$core$async31843(self__.flag,meta31844__$1));
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31845){
var self__ = this;
var _31845__$1 = this;
return self__.meta31844;
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31844","meta31844",-35092530,null)], null);
}));

(cljs.core.async.t_cljs$core$async31843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31843");

(cljs.core.async.t_cljs$core$async31843.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31843.
 */
cljs.core.async.__GT_t_cljs$core$async31843 = (function cljs$core$async$__GT_t_cljs$core$async31843(flag,meta31844){
return (new cljs.core.async.t_cljs$core$async31843(flag,meta31844));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31843(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31847 = (function (flag,cb,meta31848){
this.flag = flag;
this.cb = cb;
this.meta31848 = meta31848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31849,meta31848__$1){
var self__ = this;
var _31849__$1 = this;
return (new cljs.core.async.t_cljs$core$async31847(self__.flag,self__.cb,meta31848__$1));
}));

(cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31849){
var self__ = this;
var _31849__$1 = this;
return self__.meta31848;
}));

(cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31848","meta31848",63543332,null)], null);
}));

(cljs.core.async.t_cljs$core$async31847.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31847");

(cljs.core.async.t_cljs$core$async31847.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31847");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31847.
 */
cljs.core.async.__GT_t_cljs$core$async31847 = (function cljs$core$async$__GT_t_cljs$core$async31847(flag,cb,meta31848){
return (new cljs.core.async.t_cljs$core$async31847(flag,cb,meta31848));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31847(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31861_SHARP_){
var G__31864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31861_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31864) : fret.call(null, G__31864));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31862_SHARP_){
var G__31865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31862_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31865) : fret.call(null, G__31865));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36300 = (i + (1));
i = G__36300;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36332 = arguments.length;
var i__5727__auto___36336 = (0);
while(true){
if((i__5727__auto___36336 < len__5726__auto___36332)){
args__5732__auto__.push((arguments[i__5727__auto___36336]));

var G__36337 = (i__5727__auto___36336 + (1));
i__5727__auto___36336 = G__36337;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31885){
var map__31888 = p__31885;
var map__31888__$1 = cljs.core.__destructure_map(map__31888);
var opts = map__31888__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31874){
var G__31875 = cljs.core.first(seq31874);
var seq31874__$1 = cljs.core.next(seq31874);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31875,seq31874__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31915 = arguments.length;
switch (G__31915) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31577__auto___36379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_31993){
var state_val_31995 = (state_31993[(1)]);
if((state_val_31995 === (7))){
var inst_31985 = (state_31993[(2)]);
var state_31993__$1 = state_31993;
var statearr_32011_36393 = state_31993__$1;
(statearr_32011_36393[(2)] = inst_31985);

(statearr_32011_36393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (1))){
var state_31993__$1 = state_31993;
var statearr_32020_36396 = state_31993__$1;
(statearr_32020_36396[(2)] = null);

(statearr_32020_36396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (4))){
var inst_31951 = (state_31993[(7)]);
var inst_31951__$1 = (state_31993[(2)]);
var inst_31958 = (inst_31951__$1 == null);
var state_31993__$1 = (function (){var statearr_32024 = state_31993;
(statearr_32024[(7)] = inst_31951__$1);

return statearr_32024;
})();
if(cljs.core.truth_(inst_31958)){
var statearr_32025_36418 = state_31993__$1;
(statearr_32025_36418[(1)] = (5));

} else {
var statearr_32028_36422 = state_31993__$1;
(statearr_32028_36422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (13))){
var state_31993__$1 = state_31993;
var statearr_32033_36427 = state_31993__$1;
(statearr_32033_36427[(2)] = null);

(statearr_32033_36427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (6))){
var inst_31951 = (state_31993[(7)]);
var state_31993__$1 = state_31993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31993__$1,(11),to,inst_31951);
} else {
if((state_val_31995 === (3))){
var inst_31989 = (state_31993[(2)]);
var state_31993__$1 = state_31993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31993__$1,inst_31989);
} else {
if((state_val_31995 === (12))){
var state_31993__$1 = state_31993;
var statearr_32044_36437 = state_31993__$1;
(statearr_32044_36437[(2)] = null);

(statearr_32044_36437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (2))){
var state_31993__$1 = state_31993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31993__$1,(4),from);
} else {
if((state_val_31995 === (11))){
var inst_31975 = (state_31993[(2)]);
var state_31993__$1 = state_31993;
if(cljs.core.truth_(inst_31975)){
var statearr_32046_36441 = state_31993__$1;
(statearr_32046_36441[(1)] = (12));

} else {
var statearr_32047_36443 = state_31993__$1;
(statearr_32047_36443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (9))){
var state_31993__$1 = state_31993;
var statearr_32055_36447 = state_31993__$1;
(statearr_32055_36447[(2)] = null);

(statearr_32055_36447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (5))){
var state_31993__$1 = state_31993;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32064_36449 = state_31993__$1;
(statearr_32064_36449[(1)] = (8));

} else {
var statearr_32069_36451 = state_31993__$1;
(statearr_32069_36451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (14))){
var inst_31983 = (state_31993[(2)]);
var state_31993__$1 = state_31993;
var statearr_32072_36458 = state_31993__$1;
(statearr_32072_36458[(2)] = inst_31983);

(statearr_32072_36458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (10))){
var inst_31970 = (state_31993[(2)]);
var state_31993__$1 = state_31993;
var statearr_32073_36460 = state_31993__$1;
(statearr_32073_36460[(2)] = inst_31970);

(statearr_32073_36460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (8))){
var inst_31966 = cljs.core.async.close_BANG_(to);
var state_31993__$1 = state_31993;
var statearr_32077_36465 = state_31993__$1;
(statearr_32077_36465[(2)] = inst_31966);

(statearr_32077_36465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_32079 = [null,null,null,null,null,null,null,null];
(statearr_32079[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_32079[(1)] = (1));

return statearr_32079;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_31993){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_31993);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32083){var ex__30502__auto__ = e32083;
var statearr_32084_36477 = state_31993;
(statearr_32084_36477[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_31993[(4)]))){
var statearr_32088_36482 = state_31993;
(statearr_32088_36482[(1)] = cljs.core.first((state_31993[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36491 = state_31993;
state_31993 = G__36491;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_31993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_31993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32096 = f__31578__auto__();
(statearr_32096[(6)] = c__31577__auto___36379);

return statearr_32096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__32132){
var vec__32135 = p__32132;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32135,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32135,(1),null);
var job = vec__32135;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31577__auto___36510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_32158){
var state_val_32161 = (state_32158[(1)]);
if((state_val_32161 === (1))){
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32158__$1,(2),res,v);
} else {
if((state_val_32161 === (2))){
var inst_32154 = (state_32158[(2)]);
var inst_32156 = cljs.core.async.close_BANG_(res);
var state_32158__$1 = (function (){var statearr_32174 = state_32158;
(statearr_32174[(7)] = inst_32154);

return statearr_32174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32158__$1,inst_32156);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0 = (function (){
var statearr_32178 = [null,null,null,null,null,null,null,null];
(statearr_32178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__);

(statearr_32178[(1)] = (1));

return statearr_32178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1 = (function (state_32158){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32158);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32180){var ex__30502__auto__ = e32180;
var statearr_32182_36527 = state_32158;
(statearr_32182_36527[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32158[(4)]))){
var statearr_32184_36530 = state_32158;
(statearr_32184_36530[(1)] = cljs.core.first((state_32158[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36533 = state_32158;
state_32158 = G__36533;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = function(state_32158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1.call(this,state_32158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32187 = f__31578__auto__();
(statearr_32187[(6)] = c__31577__auto___36510);

return statearr_32187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32197){
var vec__32200 = p__32197;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32200,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32200,(1),null);
var job = vec__32200;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___36549 = n;
var __36550 = (0);
while(true){
if((__36550 < n__5593__auto___36549)){
var G__32209_36552 = type;
var G__32209_36553__$1 = (((G__32209_36552 instanceof cljs.core.Keyword))?G__32209_36552.fqn:null);
switch (G__32209_36553__$1) {
case "compute":
var c__31577__auto___36555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36550,c__31577__auto___36555,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async){
return (function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = ((function (__36550,c__31577__auto___36555,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async){
return (function (state_32230){
var state_val_32231 = (state_32230[(1)]);
if((state_val_32231 === (1))){
var state_32230__$1 = state_32230;
var statearr_32244_36564 = state_32230__$1;
(statearr_32244_36564[(2)] = null);

(statearr_32244_36564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (2))){
var state_32230__$1 = state_32230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32230__$1,(4),jobs);
} else {
if((state_val_32231 === (3))){
var inst_32227 = (state_32230[(2)]);
var state_32230__$1 = state_32230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32230__$1,inst_32227);
} else {
if((state_val_32231 === (4))){
var inst_32217 = (state_32230[(2)]);
var inst_32218 = process__$1(inst_32217);
var state_32230__$1 = state_32230;
if(cljs.core.truth_(inst_32218)){
var statearr_32262_36576 = state_32230__$1;
(statearr_32262_36576[(1)] = (5));

} else {
var statearr_32265_36577 = state_32230__$1;
(statearr_32265_36577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (5))){
var state_32230__$1 = state_32230;
var statearr_32270_36581 = state_32230__$1;
(statearr_32270_36581[(2)] = null);

(statearr_32270_36581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (6))){
var state_32230__$1 = state_32230;
var statearr_32275_36586 = state_32230__$1;
(statearr_32275_36586[(2)] = null);

(statearr_32275_36586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (7))){
var inst_32224 = (state_32230[(2)]);
var state_32230__$1 = state_32230;
var statearr_32279_36591 = state_32230__$1;
(statearr_32279_36591[(2)] = inst_32224);

(statearr_32279_36591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36550,c__31577__auto___36555,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async))
;
return ((function (__36550,switch__30498__auto__,c__31577__auto___36555,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0 = (function (){
var statearr_32286 = [null,null,null,null,null,null,null];
(statearr_32286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__);

(statearr_32286[(1)] = (1));

return statearr_32286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1 = (function (state_32230){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32230);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32291){var ex__30502__auto__ = e32291;
var statearr_32294_36595 = state_32230;
(statearr_32294_36595[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32230[(4)]))){
var statearr_32296_36596 = state_32230;
(statearr_32296_36596[(1)] = cljs.core.first((state_32230[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36603 = state_32230;
state_32230 = G__36603;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = function(state_32230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1.call(this,state_32230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__;
})()
;})(__36550,switch__30498__auto__,c__31577__auto___36555,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async))
})();
var state__31579__auto__ = (function (){var statearr_32304 = f__31578__auto__();
(statearr_32304[(6)] = c__31577__auto___36555);

return statearr_32304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
});})(__36550,c__31577__auto___36555,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async))
);


break;
case "async":
var c__31577__auto___36604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36550,c__31577__auto___36604,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async){
return (function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = ((function (__36550,c__31577__auto___36604,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async){
return (function (state_32328){
var state_val_32329 = (state_32328[(1)]);
if((state_val_32329 === (1))){
var state_32328__$1 = state_32328;
var statearr_32343_36607 = state_32328__$1;
(statearr_32343_36607[(2)] = null);

(statearr_32343_36607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (2))){
var state_32328__$1 = state_32328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32328__$1,(4),jobs);
} else {
if((state_val_32329 === (3))){
var inst_32325 = (state_32328[(2)]);
var state_32328__$1 = state_32328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32328__$1,inst_32325);
} else {
if((state_val_32329 === (4))){
var inst_32317 = (state_32328[(2)]);
var inst_32318 = async(inst_32317);
var state_32328__$1 = state_32328;
if(cljs.core.truth_(inst_32318)){
var statearr_32356_36615 = state_32328__$1;
(statearr_32356_36615[(1)] = (5));

} else {
var statearr_32362_36617 = state_32328__$1;
(statearr_32362_36617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (5))){
var state_32328__$1 = state_32328;
var statearr_32368_36618 = state_32328__$1;
(statearr_32368_36618[(2)] = null);

(statearr_32368_36618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (6))){
var state_32328__$1 = state_32328;
var statearr_32373_36619 = state_32328__$1;
(statearr_32373_36619[(2)] = null);

(statearr_32373_36619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32329 === (7))){
var inst_32323 = (state_32328[(2)]);
var state_32328__$1 = state_32328;
var statearr_32377_36620 = state_32328__$1;
(statearr_32377_36620[(2)] = inst_32323);

(statearr_32377_36620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36550,c__31577__auto___36604,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async))
;
return ((function (__36550,switch__30498__auto__,c__31577__auto___36604,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0 = (function (){
var statearr_32383 = [null,null,null,null,null,null,null];
(statearr_32383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__);

(statearr_32383[(1)] = (1));

return statearr_32383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1 = (function (state_32328){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32328);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32390){var ex__30502__auto__ = e32390;
var statearr_32393_36627 = state_32328;
(statearr_32393_36627[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32328[(4)]))){
var statearr_32396_36628 = state_32328;
(statearr_32396_36628[(1)] = cljs.core.first((state_32328[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36629 = state_32328;
state_32328 = G__36629;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = function(state_32328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1.call(this,state_32328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__;
})()
;})(__36550,switch__30498__auto__,c__31577__auto___36604,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async))
})();
var state__31579__auto__ = (function (){var statearr_32402 = f__31578__auto__();
(statearr_32402[(6)] = c__31577__auto___36604);

return statearr_32402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
});})(__36550,c__31577__auto___36604,G__32209_36552,G__32209_36553__$1,n__5593__auto___36549,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32209_36553__$1)].join('')));

}

var G__36633 = (__36550 + (1));
__36550 = G__36633;
continue;
} else {
}
break;
}

var c__31577__auto___36635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_32449){
var state_val_32450 = (state_32449[(1)]);
if((state_val_32450 === (7))){
var inst_32440 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32472_36639 = state_32449__$1;
(statearr_32472_36639[(2)] = inst_32440);

(statearr_32472_36639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (1))){
var state_32449__$1 = state_32449;
var statearr_32487_36647 = state_32449__$1;
(statearr_32487_36647[(2)] = null);

(statearr_32487_36647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (4))){
var inst_32412 = (state_32449[(7)]);
var inst_32412__$1 = (state_32449[(2)]);
var inst_32416 = (inst_32412__$1 == null);
var state_32449__$1 = (function (){var statearr_32494 = state_32449;
(statearr_32494[(7)] = inst_32412__$1);

return statearr_32494;
})();
if(cljs.core.truth_(inst_32416)){
var statearr_32500_36653 = state_32449__$1;
(statearr_32500_36653[(1)] = (5));

} else {
var statearr_32504_36654 = state_32449__$1;
(statearr_32504_36654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (6))){
var inst_32420 = (state_32449[(8)]);
var inst_32412 = (state_32449[(7)]);
var inst_32420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32427 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32430 = [inst_32412,inst_32420__$1];
var inst_32431 = (new cljs.core.PersistentVector(null,2,(5),inst_32427,inst_32430,null));
var state_32449__$1 = (function (){var statearr_32516 = state_32449;
(statearr_32516[(8)] = inst_32420__$1);

return statearr_32516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32449__$1,(8),jobs,inst_32431);
} else {
if((state_val_32450 === (3))){
var inst_32443 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32449__$1,inst_32443);
} else {
if((state_val_32450 === (2))){
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32449__$1,(4),from);
} else {
if((state_val_32450 === (9))){
var inst_32435 = (state_32449[(2)]);
var state_32449__$1 = (function (){var statearr_32527 = state_32449;
(statearr_32527[(9)] = inst_32435);

return statearr_32527;
})();
var statearr_32528_36657 = state_32449__$1;
(statearr_32528_36657[(2)] = null);

(statearr_32528_36657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (5))){
var inst_32418 = cljs.core.async.close_BANG_(jobs);
var state_32449__$1 = state_32449;
var statearr_32530_36658 = state_32449__$1;
(statearr_32530_36658[(2)] = inst_32418);

(statearr_32530_36658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (8))){
var inst_32420 = (state_32449[(8)]);
var inst_32433 = (state_32449[(2)]);
var state_32449__$1 = (function (){var statearr_32532 = state_32449;
(statearr_32532[(10)] = inst_32433);

return statearr_32532;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32449__$1,(9),results,inst_32420);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0 = (function (){
var statearr_32542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__);

(statearr_32542[(1)] = (1));

return statearr_32542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1 = (function (state_32449){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32449);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32543){var ex__30502__auto__ = e32543;
var statearr_32546_36674 = state_32449;
(statearr_32546_36674[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32449[(4)]))){
var statearr_32551_36676 = state_32449;
(statearr_32551_36676[(1)] = cljs.core.first((state_32449[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36678 = state_32449;
state_32449 = G__36678;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = function(state_32449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1.call(this,state_32449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32559 = f__31578__auto__();
(statearr_32559[(6)] = c__31577__auto___36635);

return statearr_32559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


var c__31577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_32624){
var state_val_32625 = (state_32624[(1)]);
if((state_val_32625 === (7))){
var inst_32617 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32636_36681 = state_32624__$1;
(statearr_32636_36681[(2)] = inst_32617);

(statearr_32636_36681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (20))){
var state_32624__$1 = state_32624;
var statearr_32638_36684 = state_32624__$1;
(statearr_32638_36684[(2)] = null);

(statearr_32638_36684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (1))){
var state_32624__$1 = state_32624;
var statearr_32640_36686 = state_32624__$1;
(statearr_32640_36686[(2)] = null);

(statearr_32640_36686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (4))){
var inst_32569 = (state_32624[(7)]);
var inst_32569__$1 = (state_32624[(2)]);
var inst_32570 = (inst_32569__$1 == null);
var state_32624__$1 = (function (){var statearr_32645 = state_32624;
(statearr_32645[(7)] = inst_32569__$1);

return statearr_32645;
})();
if(cljs.core.truth_(inst_32570)){
var statearr_32650_36688 = state_32624__$1;
(statearr_32650_36688[(1)] = (5));

} else {
var statearr_32654_36689 = state_32624__$1;
(statearr_32654_36689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (15))){
var inst_32593 = (state_32624[(8)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32624__$1,(18),to,inst_32593);
} else {
if((state_val_32625 === (21))){
var inst_32612 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32660_36690 = state_32624__$1;
(statearr_32660_36690[(2)] = inst_32612);

(statearr_32660_36690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (13))){
var inst_32614 = (state_32624[(2)]);
var state_32624__$1 = (function (){var statearr_32664 = state_32624;
(statearr_32664[(9)] = inst_32614);

return statearr_32664;
})();
var statearr_32666_36701 = state_32624__$1;
(statearr_32666_36701[(2)] = null);

(statearr_32666_36701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (6))){
var inst_32569 = (state_32624[(7)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32624__$1,(11),inst_32569);
} else {
if((state_val_32625 === (17))){
var inst_32607 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
if(cljs.core.truth_(inst_32607)){
var statearr_32677_36706 = state_32624__$1;
(statearr_32677_36706[(1)] = (19));

} else {
var statearr_32679_36707 = state_32624__$1;
(statearr_32679_36707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (3))){
var inst_32619 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32624__$1,inst_32619);
} else {
if((state_val_32625 === (12))){
var inst_32587 = (state_32624[(10)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32624__$1,(14),inst_32587);
} else {
if((state_val_32625 === (2))){
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32624__$1,(4),results);
} else {
if((state_val_32625 === (19))){
var state_32624__$1 = state_32624;
var statearr_32688_36720 = state_32624__$1;
(statearr_32688_36720[(2)] = null);

(statearr_32688_36720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (11))){
var inst_32587 = (state_32624[(2)]);
var state_32624__$1 = (function (){var statearr_32693 = state_32624;
(statearr_32693[(10)] = inst_32587);

return statearr_32693;
})();
var statearr_32697_36722 = state_32624__$1;
(statearr_32697_36722[(2)] = null);

(statearr_32697_36722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (9))){
var state_32624__$1 = state_32624;
var statearr_32702_36724 = state_32624__$1;
(statearr_32702_36724[(2)] = null);

(statearr_32702_36724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (5))){
var state_32624__$1 = state_32624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32704_36727 = state_32624__$1;
(statearr_32704_36727[(1)] = (8));

} else {
var statearr_32706_36728 = state_32624__$1;
(statearr_32706_36728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (14))){
var inst_32593 = (state_32624[(8)]);
var inst_32600 = (state_32624[(11)]);
var inst_32593__$1 = (state_32624[(2)]);
var inst_32598 = (inst_32593__$1 == null);
var inst_32600__$1 = cljs.core.not(inst_32598);
var state_32624__$1 = (function (){var statearr_32709 = state_32624;
(statearr_32709[(8)] = inst_32593__$1);

(statearr_32709[(11)] = inst_32600__$1);

return statearr_32709;
})();
if(inst_32600__$1){
var statearr_32711_36729 = state_32624__$1;
(statearr_32711_36729[(1)] = (15));

} else {
var statearr_32712_36730 = state_32624__$1;
(statearr_32712_36730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (16))){
var inst_32600 = (state_32624[(11)]);
var state_32624__$1 = state_32624;
var statearr_32715_36731 = state_32624__$1;
(statearr_32715_36731[(2)] = inst_32600);

(statearr_32715_36731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (10))){
var inst_32581 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32718_36741 = state_32624__$1;
(statearr_32718_36741[(2)] = inst_32581);

(statearr_32718_36741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (18))){
var inst_32604 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32723_36747 = state_32624__$1;
(statearr_32723_36747[(2)] = inst_32604);

(statearr_32723_36747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (8))){
var inst_32574 = cljs.core.async.close_BANG_(to);
var state_32624__$1 = state_32624;
var statearr_32724_36749 = state_32624__$1;
(statearr_32724_36749[(2)] = inst_32574);

(statearr_32724_36749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0 = (function (){
var statearr_32726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32726[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__);

(statearr_32726[(1)] = (1));

return statearr_32726;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1 = (function (state_32624){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32624);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32729){var ex__30502__auto__ = e32729;
var statearr_32731_36751 = state_32624;
(statearr_32731_36751[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32624[(4)]))){
var statearr_32735_36753 = state_32624;
(statearr_32735_36753[(1)] = cljs.core.first((state_32624[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36754 = state_32624;
state_32624 = G__36754;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__ = function(state_32624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1.call(this,state_32624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30499__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32742 = f__31578__auto__();
(statearr_32742[(6)] = c__31577__auto__);

return statearr_32742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));

return c__31577__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32746 = arguments.length;
switch (G__32746) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32752 = arguments.length;
switch (G__32752) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32761 = arguments.length;
switch (G__32761) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31577__auto___36784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_32792){
var state_val_32793 = (state_32792[(1)]);
if((state_val_32793 === (7))){
var inst_32788 = (state_32792[(2)]);
var state_32792__$1 = state_32792;
var statearr_32794_36789 = state_32792__$1;
(statearr_32794_36789[(2)] = inst_32788);

(statearr_32794_36789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (1))){
var state_32792__$1 = state_32792;
var statearr_32795_36795 = state_32792__$1;
(statearr_32795_36795[(2)] = null);

(statearr_32795_36795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (4))){
var inst_32769 = (state_32792[(7)]);
var inst_32769__$1 = (state_32792[(2)]);
var inst_32770 = (inst_32769__$1 == null);
var state_32792__$1 = (function (){var statearr_32798 = state_32792;
(statearr_32798[(7)] = inst_32769__$1);

return statearr_32798;
})();
if(cljs.core.truth_(inst_32770)){
var statearr_32799_36799 = state_32792__$1;
(statearr_32799_36799[(1)] = (5));

} else {
var statearr_32801_36800 = state_32792__$1;
(statearr_32801_36800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (13))){
var state_32792__$1 = state_32792;
var statearr_32803_36803 = state_32792__$1;
(statearr_32803_36803[(2)] = null);

(statearr_32803_36803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (6))){
var inst_32769 = (state_32792[(7)]);
var inst_32775 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32769) : p.call(null, inst_32769));
var state_32792__$1 = state_32792;
if(cljs.core.truth_(inst_32775)){
var statearr_32805_36811 = state_32792__$1;
(statearr_32805_36811[(1)] = (9));

} else {
var statearr_32806_36812 = state_32792__$1;
(statearr_32806_36812[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (3))){
var inst_32790 = (state_32792[(2)]);
var state_32792__$1 = state_32792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32792__$1,inst_32790);
} else {
if((state_val_32793 === (12))){
var state_32792__$1 = state_32792;
var statearr_32807_36813 = state_32792__$1;
(statearr_32807_36813[(2)] = null);

(statearr_32807_36813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (2))){
var state_32792__$1 = state_32792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32792__$1,(4),ch);
} else {
if((state_val_32793 === (11))){
var inst_32769 = (state_32792[(7)]);
var inst_32779 = (state_32792[(2)]);
var state_32792__$1 = state_32792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32792__$1,(8),inst_32779,inst_32769);
} else {
if((state_val_32793 === (9))){
var state_32792__$1 = state_32792;
var statearr_32808_36819 = state_32792__$1;
(statearr_32808_36819[(2)] = tc);

(statearr_32808_36819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (5))){
var inst_32772 = cljs.core.async.close_BANG_(tc);
var inst_32773 = cljs.core.async.close_BANG_(fc);
var state_32792__$1 = (function (){var statearr_32811 = state_32792;
(statearr_32811[(8)] = inst_32772);

return statearr_32811;
})();
var statearr_32812_36824 = state_32792__$1;
(statearr_32812_36824[(2)] = inst_32773);

(statearr_32812_36824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (14))){
var inst_32786 = (state_32792[(2)]);
var state_32792__$1 = state_32792;
var statearr_32813_36830 = state_32792__$1;
(statearr_32813_36830[(2)] = inst_32786);

(statearr_32813_36830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (10))){
var state_32792__$1 = state_32792;
var statearr_32815_36831 = state_32792__$1;
(statearr_32815_36831[(2)] = fc);

(statearr_32815_36831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32793 === (8))){
var inst_32781 = (state_32792[(2)]);
var state_32792__$1 = state_32792;
if(cljs.core.truth_(inst_32781)){
var statearr_32816_36832 = state_32792__$1;
(statearr_32816_36832[(1)] = (12));

} else {
var statearr_32817_36833 = state_32792__$1;
(statearr_32817_36833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_32819 = [null,null,null,null,null,null,null,null,null];
(statearr_32819[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_32819[(1)] = (1));

return statearr_32819;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_32792){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32792);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32820){var ex__30502__auto__ = e32820;
var statearr_32821_36838 = state_32792;
(statearr_32821_36838[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32792[(4)]))){
var statearr_32822_36839 = state_32792;
(statearr_32822_36839[(1)] = cljs.core.first((state_32792[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36840 = state_32792;
state_32792 = G__36840;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_32792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_32792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32826 = f__31578__auto__();
(statearr_32826[(6)] = c__31577__auto___36784);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_32849){
var state_val_32850 = (state_32849[(1)]);
if((state_val_32850 === (7))){
var inst_32845 = (state_32849[(2)]);
var state_32849__$1 = state_32849;
var statearr_32855_36848 = state_32849__$1;
(statearr_32855_36848[(2)] = inst_32845);

(statearr_32855_36848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (1))){
var inst_32827 = init;
var inst_32828 = inst_32827;
var state_32849__$1 = (function (){var statearr_32859 = state_32849;
(statearr_32859[(7)] = inst_32828);

return statearr_32859;
})();
var statearr_32860_36858 = state_32849__$1;
(statearr_32860_36858[(2)] = null);

(statearr_32860_36858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (4))){
var inst_32831 = (state_32849[(8)]);
var inst_32831__$1 = (state_32849[(2)]);
var inst_32832 = (inst_32831__$1 == null);
var state_32849__$1 = (function (){var statearr_32864 = state_32849;
(statearr_32864[(8)] = inst_32831__$1);

return statearr_32864;
})();
if(cljs.core.truth_(inst_32832)){
var statearr_32865_36863 = state_32849__$1;
(statearr_32865_36863[(1)] = (5));

} else {
var statearr_32866_36864 = state_32849__$1;
(statearr_32866_36864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (6))){
var inst_32831 = (state_32849[(8)]);
var inst_32835 = (state_32849[(9)]);
var inst_32828 = (state_32849[(7)]);
var inst_32835__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32828,inst_32831) : f.call(null, inst_32828,inst_32831));
var inst_32837 = cljs.core.reduced_QMARK_(inst_32835__$1);
var state_32849__$1 = (function (){var statearr_32868 = state_32849;
(statearr_32868[(9)] = inst_32835__$1);

return statearr_32868;
})();
if(inst_32837){
var statearr_32872_36869 = state_32849__$1;
(statearr_32872_36869[(1)] = (8));

} else {
var statearr_32873_36870 = state_32849__$1;
(statearr_32873_36870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (3))){
var inst_32847 = (state_32849[(2)]);
var state_32849__$1 = state_32849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32849__$1,inst_32847);
} else {
if((state_val_32850 === (2))){
var state_32849__$1 = state_32849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32849__$1,(4),ch);
} else {
if((state_val_32850 === (9))){
var inst_32835 = (state_32849[(9)]);
var inst_32828 = inst_32835;
var state_32849__$1 = (function (){var statearr_32874 = state_32849;
(statearr_32874[(7)] = inst_32828);

return statearr_32874;
})();
var statearr_32875_36872 = state_32849__$1;
(statearr_32875_36872[(2)] = null);

(statearr_32875_36872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (5))){
var inst_32828 = (state_32849[(7)]);
var state_32849__$1 = state_32849;
var statearr_32879_36875 = state_32849__$1;
(statearr_32879_36875[(2)] = inst_32828);

(statearr_32879_36875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (10))){
var inst_32843 = (state_32849[(2)]);
var state_32849__$1 = state_32849;
var statearr_32880_36880 = state_32849__$1;
(statearr_32880_36880[(2)] = inst_32843);

(statearr_32880_36880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (8))){
var inst_32835 = (state_32849[(9)]);
var inst_32839 = cljs.core.deref(inst_32835);
var state_32849__$1 = state_32849;
var statearr_32881_36881 = state_32849__$1;
(statearr_32881_36881[(2)] = inst_32839);

(statearr_32881_36881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30499__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30499__auto____0 = (function (){
var statearr_32882 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32882[(0)] = cljs$core$async$reduce_$_state_machine__30499__auto__);

(statearr_32882[(1)] = (1));

return statearr_32882;
});
var cljs$core$async$reduce_$_state_machine__30499__auto____1 = (function (state_32849){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32849);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32884){var ex__30502__auto__ = e32884;
var statearr_32886_36886 = state_32849;
(statearr_32886_36886[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32849[(4)]))){
var statearr_32889_36888 = state_32849;
(statearr_32889_36888[(1)] = cljs.core.first((state_32849[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36893 = state_32849;
state_32849 = G__36893;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30499__auto__ = function(state_32849){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30499__auto____1.call(this,state_32849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30499__auto____0;
cljs$core$async$reduce_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30499__auto____1;
return cljs$core$async$reduce_$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32890 = f__31578__auto__();
(statearr_32890[(6)] = c__31577__auto__);

return statearr_32890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));

return c__31577__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__31577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_32896){
var state_val_32897 = (state_32896[(1)]);
if((state_val_32897 === (1))){
var inst_32891 = cljs.core.async.reduce(f__$1,init,ch);
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32896__$1,(2),inst_32891);
} else {
if((state_val_32897 === (2))){
var inst_32893 = (state_32896[(2)]);
var inst_32894 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32893) : f__$1.call(null, inst_32893));
var state_32896__$1 = state_32896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32896__$1,inst_32894);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30499__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30499__auto____0 = (function (){
var statearr_32903 = [null,null,null,null,null,null,null];
(statearr_32903[(0)] = cljs$core$async$transduce_$_state_machine__30499__auto__);

(statearr_32903[(1)] = (1));

return statearr_32903;
});
var cljs$core$async$transduce_$_state_machine__30499__auto____1 = (function (state_32896){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32896);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32904){var ex__30502__auto__ = e32904;
var statearr_32905_36909 = state_32896;
(statearr_32905_36909[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32896[(4)]))){
var statearr_32908_36910 = state_32896;
(statearr_32908_36910[(1)] = cljs.core.first((state_32896[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_32896;
state_32896 = G__36915;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30499__auto__ = function(state_32896){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30499__auto____1.call(this,state_32896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30499__auto____0;
cljs$core$async$transduce_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30499__auto____1;
return cljs$core$async$transduce_$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32911 = f__31578__auto__();
(statearr_32911[(6)] = c__31577__auto__);

return statearr_32911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));

return c__31577__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32914 = arguments.length;
switch (G__32914) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_32944){
var state_val_32945 = (state_32944[(1)]);
if((state_val_32945 === (7))){
var inst_32926 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
var statearr_32949_36922 = state_32944__$1;
(statearr_32949_36922[(2)] = inst_32926);

(statearr_32949_36922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (1))){
var inst_32920 = cljs.core.seq(coll);
var inst_32921 = inst_32920;
var state_32944__$1 = (function (){var statearr_32952 = state_32944;
(statearr_32952[(7)] = inst_32921);

return statearr_32952;
})();
var statearr_32955_36927 = state_32944__$1;
(statearr_32955_36927[(2)] = null);

(statearr_32955_36927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (4))){
var inst_32921 = (state_32944[(7)]);
var inst_32924 = cljs.core.first(inst_32921);
var state_32944__$1 = state_32944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32944__$1,(7),ch,inst_32924);
} else {
if((state_val_32945 === (13))){
var inst_32938 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
var statearr_32956_36929 = state_32944__$1;
(statearr_32956_36929[(2)] = inst_32938);

(statearr_32956_36929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (6))){
var inst_32929 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
if(cljs.core.truth_(inst_32929)){
var statearr_32958_36930 = state_32944__$1;
(statearr_32958_36930[(1)] = (8));

} else {
var statearr_32959_36931 = state_32944__$1;
(statearr_32959_36931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (3))){
var inst_32942 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32944__$1,inst_32942);
} else {
if((state_val_32945 === (12))){
var state_32944__$1 = state_32944;
var statearr_32966_36934 = state_32944__$1;
(statearr_32966_36934[(2)] = null);

(statearr_32966_36934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (2))){
var inst_32921 = (state_32944[(7)]);
var state_32944__$1 = state_32944;
if(cljs.core.truth_(inst_32921)){
var statearr_32967_36939 = state_32944__$1;
(statearr_32967_36939[(1)] = (4));

} else {
var statearr_32968_36940 = state_32944__$1;
(statearr_32968_36940[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (11))){
var inst_32935 = cljs.core.async.close_BANG_(ch);
var state_32944__$1 = state_32944;
var statearr_32969_36943 = state_32944__$1;
(statearr_32969_36943[(2)] = inst_32935);

(statearr_32969_36943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (9))){
var state_32944__$1 = state_32944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32970_36944 = state_32944__$1;
(statearr_32970_36944[(1)] = (11));

} else {
var statearr_32971_36945 = state_32944__$1;
(statearr_32971_36945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (5))){
var inst_32921 = (state_32944[(7)]);
var state_32944__$1 = state_32944;
var statearr_32972_36948 = state_32944__$1;
(statearr_32972_36948[(2)] = inst_32921);

(statearr_32972_36948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (10))){
var inst_32940 = (state_32944[(2)]);
var state_32944__$1 = state_32944;
var statearr_32973_36953 = state_32944__$1;
(statearr_32973_36953[(2)] = inst_32940);

(statearr_32973_36953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32945 === (8))){
var inst_32921 = (state_32944[(7)]);
var inst_32931 = cljs.core.next(inst_32921);
var inst_32921__$1 = inst_32931;
var state_32944__$1 = (function (){var statearr_32974 = state_32944;
(statearr_32974[(7)] = inst_32921__$1);

return statearr_32974;
})();
var statearr_32977_36960 = state_32944__$1;
(statearr_32977_36960[(2)] = null);

(statearr_32977_36960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_32981 = [null,null,null,null,null,null,null,null];
(statearr_32981[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_32981[(1)] = (1));

return statearr_32981;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_32944){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_32944);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e32984){var ex__30502__auto__ = e32984;
var statearr_32986_36967 = state_32944;
(statearr_32986_36967[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_32944[(4)]))){
var statearr_32988_36971 = state_32944;
(statearr_32988_36971[(1)] = cljs.core.first((state_32944[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36974 = state_32944;
state_32944 = G__36974;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_32944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_32944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_32993 = f__31578__auto__();
(statearr_32993[(6)] = c__31577__auto__);

return statearr_32993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));

return c__31577__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33001 = arguments.length;
switch (G__33001) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37010 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37010(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37044 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37044(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37070 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37070(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37089 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37089(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33099 = (function (ch,cs,meta33100){
this.ch = ch;
this.cs = cs;
this.meta33100 = meta33100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33101,meta33100__$1){
var self__ = this;
var _33101__$1 = this;
return (new cljs.core.async.t_cljs$core$async33099(self__.ch,self__.cs,meta33100__$1));
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33101){
var self__ = this;
var _33101__$1 = this;
return self__.meta33100;
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33099.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33100","meta33100",-1885946385,null)], null);
}));

(cljs.core.async.t_cljs$core$async33099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33099");

(cljs.core.async.t_cljs$core$async33099.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33099.
 */
cljs.core.async.__GT_t_cljs$core$async33099 = (function cljs$core$async$__GT_t_cljs$core$async33099(ch,cs,meta33100){
return (new cljs.core.async.t_cljs$core$async33099(ch,cs,meta33100));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async33099(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31577__auto___37127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_33283){
var state_val_33284 = (state_33283[(1)]);
if((state_val_33284 === (7))){
var inst_33277 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33285_37140 = state_33283__$1;
(statearr_33285_37140[(2)] = inst_33277);

(statearr_33285_37140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (20))){
var inst_33168 = (state_33283[(7)]);
var inst_33180 = cljs.core.first(inst_33168);
var inst_33181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33180,(0),null);
var inst_33182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33180,(1),null);
var state_33283__$1 = (function (){var statearr_33288 = state_33283;
(statearr_33288[(8)] = inst_33181);

return statearr_33288;
})();
if(cljs.core.truth_(inst_33182)){
var statearr_33289_37148 = state_33283__$1;
(statearr_33289_37148[(1)] = (22));

} else {
var statearr_33290_37149 = state_33283__$1;
(statearr_33290_37149[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (27))){
var inst_33216 = (state_33283[(9)]);
var inst_33221 = (state_33283[(10)]);
var inst_33214 = (state_33283[(11)]);
var inst_33129 = (state_33283[(12)]);
var inst_33221__$1 = cljs.core._nth(inst_33214,inst_33216);
var inst_33222 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33221__$1,inst_33129,done);
var state_33283__$1 = (function (){var statearr_33294 = state_33283;
(statearr_33294[(10)] = inst_33221__$1);

return statearr_33294;
})();
if(cljs.core.truth_(inst_33222)){
var statearr_33296_37155 = state_33283__$1;
(statearr_33296_37155[(1)] = (30));

} else {
var statearr_33299_37158 = state_33283__$1;
(statearr_33299_37158[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (1))){
var state_33283__$1 = state_33283;
var statearr_33300_37160 = state_33283__$1;
(statearr_33300_37160[(2)] = null);

(statearr_33300_37160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (24))){
var inst_33168 = (state_33283[(7)]);
var inst_33187 = (state_33283[(2)]);
var inst_33188 = cljs.core.next(inst_33168);
var inst_33138 = inst_33188;
var inst_33139 = null;
var inst_33140 = (0);
var inst_33141 = (0);
var state_33283__$1 = (function (){var statearr_33302 = state_33283;
(statearr_33302[(13)] = inst_33141);

(statearr_33302[(14)] = inst_33140);

(statearr_33302[(15)] = inst_33139);

(statearr_33302[(16)] = inst_33187);

(statearr_33302[(17)] = inst_33138);

return statearr_33302;
})();
var statearr_33303_37168 = state_33283__$1;
(statearr_33303_37168[(2)] = null);

(statearr_33303_37168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (39))){
var state_33283__$1 = state_33283;
var statearr_33310_37173 = state_33283__$1;
(statearr_33310_37173[(2)] = null);

(statearr_33310_37173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (4))){
var inst_33129 = (state_33283[(12)]);
var inst_33129__$1 = (state_33283[(2)]);
var inst_33130 = (inst_33129__$1 == null);
var state_33283__$1 = (function (){var statearr_33314 = state_33283;
(statearr_33314[(12)] = inst_33129__$1);

return statearr_33314;
})();
if(cljs.core.truth_(inst_33130)){
var statearr_33315_37180 = state_33283__$1;
(statearr_33315_37180[(1)] = (5));

} else {
var statearr_33316_37181 = state_33283__$1;
(statearr_33316_37181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (15))){
var inst_33141 = (state_33283[(13)]);
var inst_33140 = (state_33283[(14)]);
var inst_33139 = (state_33283[(15)]);
var inst_33138 = (state_33283[(17)]);
var inst_33163 = (state_33283[(2)]);
var inst_33164 = (inst_33141 + (1));
var tmp33306 = inst_33140;
var tmp33307 = inst_33139;
var tmp33308 = inst_33138;
var inst_33138__$1 = tmp33308;
var inst_33139__$1 = tmp33307;
var inst_33140__$1 = tmp33306;
var inst_33141__$1 = inst_33164;
var state_33283__$1 = (function (){var statearr_33317 = state_33283;
(statearr_33317[(13)] = inst_33141__$1);

(statearr_33317[(14)] = inst_33140__$1);

(statearr_33317[(15)] = inst_33139__$1);

(statearr_33317[(17)] = inst_33138__$1);

(statearr_33317[(18)] = inst_33163);

return statearr_33317;
})();
var statearr_33318_37196 = state_33283__$1;
(statearr_33318_37196[(2)] = null);

(statearr_33318_37196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (21))){
var inst_33191 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33323_37201 = state_33283__$1;
(statearr_33323_37201[(2)] = inst_33191);

(statearr_33323_37201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (31))){
var inst_33221 = (state_33283[(10)]);
var inst_33225 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_33221);
var state_33283__$1 = state_33283;
var statearr_33324_37204 = state_33283__$1;
(statearr_33324_37204[(2)] = inst_33225);

(statearr_33324_37204[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (32))){
var inst_33215 = (state_33283[(19)]);
var inst_33216 = (state_33283[(9)]);
var inst_33213 = (state_33283[(20)]);
var inst_33214 = (state_33283[(11)]);
var inst_33228 = (state_33283[(2)]);
var inst_33229 = (inst_33216 + (1));
var tmp33320 = inst_33215;
var tmp33321 = inst_33213;
var tmp33322 = inst_33214;
var inst_33213__$1 = tmp33321;
var inst_33214__$1 = tmp33322;
var inst_33215__$1 = tmp33320;
var inst_33216__$1 = inst_33229;
var state_33283__$1 = (function (){var statearr_33326 = state_33283;
(statearr_33326[(19)] = inst_33215__$1);

(statearr_33326[(21)] = inst_33228);

(statearr_33326[(9)] = inst_33216__$1);

(statearr_33326[(20)] = inst_33213__$1);

(statearr_33326[(11)] = inst_33214__$1);

return statearr_33326;
})();
var statearr_33328_37213 = state_33283__$1;
(statearr_33328_37213[(2)] = null);

(statearr_33328_37213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (40))){
var inst_33248 = (state_33283[(22)]);
var inst_33252 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_33248);
var state_33283__$1 = state_33283;
var statearr_33329_37218 = state_33283__$1;
(statearr_33329_37218[(2)] = inst_33252);

(statearr_33329_37218[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (33))){
var inst_33233 = (state_33283[(23)]);
var inst_33235 = cljs.core.chunked_seq_QMARK_(inst_33233);
var state_33283__$1 = state_33283;
if(inst_33235){
var statearr_33330_37222 = state_33283__$1;
(statearr_33330_37222[(1)] = (36));

} else {
var statearr_33331_37223 = state_33283__$1;
(statearr_33331_37223[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (13))){
var inst_33154 = (state_33283[(24)]);
var inst_33160 = cljs.core.async.close_BANG_(inst_33154);
var state_33283__$1 = state_33283;
var statearr_33332_37230 = state_33283__$1;
(statearr_33332_37230[(2)] = inst_33160);

(statearr_33332_37230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (22))){
var inst_33181 = (state_33283[(8)]);
var inst_33184 = cljs.core.async.close_BANG_(inst_33181);
var state_33283__$1 = state_33283;
var statearr_33334_37236 = state_33283__$1;
(statearr_33334_37236[(2)] = inst_33184);

(statearr_33334_37236[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (36))){
var inst_33233 = (state_33283[(23)]);
var inst_33240 = cljs.core.chunk_first(inst_33233);
var inst_33241 = cljs.core.chunk_rest(inst_33233);
var inst_33242 = cljs.core.count(inst_33240);
var inst_33213 = inst_33241;
var inst_33214 = inst_33240;
var inst_33215 = inst_33242;
var inst_33216 = (0);
var state_33283__$1 = (function (){var statearr_33338 = state_33283;
(statearr_33338[(19)] = inst_33215);

(statearr_33338[(9)] = inst_33216);

(statearr_33338[(20)] = inst_33213);

(statearr_33338[(11)] = inst_33214);

return statearr_33338;
})();
var statearr_33340_37245 = state_33283__$1;
(statearr_33340_37245[(2)] = null);

(statearr_33340_37245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (41))){
var inst_33233 = (state_33283[(23)]);
var inst_33254 = (state_33283[(2)]);
var inst_33255 = cljs.core.next(inst_33233);
var inst_33213 = inst_33255;
var inst_33214 = null;
var inst_33215 = (0);
var inst_33216 = (0);
var state_33283__$1 = (function (){var statearr_33343 = state_33283;
(statearr_33343[(19)] = inst_33215);

(statearr_33343[(9)] = inst_33216);

(statearr_33343[(20)] = inst_33213);

(statearr_33343[(25)] = inst_33254);

(statearr_33343[(11)] = inst_33214);

return statearr_33343;
})();
var statearr_33345_37253 = state_33283__$1;
(statearr_33345_37253[(2)] = null);

(statearr_33345_37253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (43))){
var state_33283__$1 = state_33283;
var statearr_33347_37254 = state_33283__$1;
(statearr_33347_37254[(2)] = null);

(statearr_33347_37254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (29))){
var inst_33263 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33350_37265 = state_33283__$1;
(statearr_33350_37265[(2)] = inst_33263);

(statearr_33350_37265[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (44))){
var inst_33274 = (state_33283[(2)]);
var state_33283__$1 = (function (){var statearr_33351 = state_33283;
(statearr_33351[(26)] = inst_33274);

return statearr_33351;
})();
var statearr_33352_37268 = state_33283__$1;
(statearr_33352_37268[(2)] = null);

(statearr_33352_37268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (6))){
var inst_33201 = (state_33283[(27)]);
var inst_33200 = cljs.core.deref(cs);
var inst_33201__$1 = cljs.core.keys(inst_33200);
var inst_33202 = cljs.core.count(inst_33201__$1);
var inst_33203 = cljs.core.reset_BANG_(dctr,inst_33202);
var inst_33211 = cljs.core.seq(inst_33201__$1);
var inst_33213 = inst_33211;
var inst_33214 = null;
var inst_33215 = (0);
var inst_33216 = (0);
var state_33283__$1 = (function (){var statearr_33357 = state_33283;
(statearr_33357[(27)] = inst_33201__$1);

(statearr_33357[(19)] = inst_33215);

(statearr_33357[(28)] = inst_33203);

(statearr_33357[(9)] = inst_33216);

(statearr_33357[(20)] = inst_33213);

(statearr_33357[(11)] = inst_33214);

return statearr_33357;
})();
var statearr_33359_37271 = state_33283__$1;
(statearr_33359_37271[(2)] = null);

(statearr_33359_37271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (28))){
var inst_33213 = (state_33283[(20)]);
var inst_33233 = (state_33283[(23)]);
var inst_33233__$1 = cljs.core.seq(inst_33213);
var state_33283__$1 = (function (){var statearr_33361 = state_33283;
(statearr_33361[(23)] = inst_33233__$1);

return statearr_33361;
})();
if(inst_33233__$1){
var statearr_33363_37273 = state_33283__$1;
(statearr_33363_37273[(1)] = (33));

} else {
var statearr_33364_37276 = state_33283__$1;
(statearr_33364_37276[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (25))){
var inst_33215 = (state_33283[(19)]);
var inst_33216 = (state_33283[(9)]);
var inst_33218 = (inst_33216 < inst_33215);
var inst_33219 = inst_33218;
var state_33283__$1 = state_33283;
if(cljs.core.truth_(inst_33219)){
var statearr_33365_37285 = state_33283__$1;
(statearr_33365_37285[(1)] = (27));

} else {
var statearr_33366_37286 = state_33283__$1;
(statearr_33366_37286[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (34))){
var state_33283__$1 = state_33283;
var statearr_33371_37288 = state_33283__$1;
(statearr_33371_37288[(2)] = null);

(statearr_33371_37288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (17))){
var state_33283__$1 = state_33283;
var statearr_33372_37289 = state_33283__$1;
(statearr_33372_37289[(2)] = null);

(statearr_33372_37289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (3))){
var inst_33279 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33283__$1,inst_33279);
} else {
if((state_val_33284 === (12))){
var inst_33196 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33373_37297 = state_33283__$1;
(statearr_33373_37297[(2)] = inst_33196);

(statearr_33373_37297[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (2))){
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33283__$1,(4),ch);
} else {
if((state_val_33284 === (23))){
var state_33283__$1 = state_33283;
var statearr_33374_37303 = state_33283__$1;
(statearr_33374_37303[(2)] = null);

(statearr_33374_37303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (35))){
var inst_33261 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33375_37311 = state_33283__$1;
(statearr_33375_37311[(2)] = inst_33261);

(statearr_33375_37311[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (19))){
var inst_33168 = (state_33283[(7)]);
var inst_33172 = cljs.core.chunk_first(inst_33168);
var inst_33173 = cljs.core.chunk_rest(inst_33168);
var inst_33174 = cljs.core.count(inst_33172);
var inst_33138 = inst_33173;
var inst_33139 = inst_33172;
var inst_33140 = inst_33174;
var inst_33141 = (0);
var state_33283__$1 = (function (){var statearr_33380 = state_33283;
(statearr_33380[(13)] = inst_33141);

(statearr_33380[(14)] = inst_33140);

(statearr_33380[(15)] = inst_33139);

(statearr_33380[(17)] = inst_33138);

return statearr_33380;
})();
var statearr_33385_37319 = state_33283__$1;
(statearr_33385_37319[(2)] = null);

(statearr_33385_37319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (11))){
var inst_33138 = (state_33283[(17)]);
var inst_33168 = (state_33283[(7)]);
var inst_33168__$1 = cljs.core.seq(inst_33138);
var state_33283__$1 = (function (){var statearr_33390 = state_33283;
(statearr_33390[(7)] = inst_33168__$1);

return statearr_33390;
})();
if(inst_33168__$1){
var statearr_33391_37325 = state_33283__$1;
(statearr_33391_37325[(1)] = (16));

} else {
var statearr_33395_37327 = state_33283__$1;
(statearr_33395_37327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (9))){
var inst_33198 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33397_37331 = state_33283__$1;
(statearr_33397_37331[(2)] = inst_33198);

(statearr_33397_37331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (5))){
var inst_33136 = cljs.core.deref(cs);
var inst_33137 = cljs.core.seq(inst_33136);
var inst_33138 = inst_33137;
var inst_33139 = null;
var inst_33140 = (0);
var inst_33141 = (0);
var state_33283__$1 = (function (){var statearr_33398 = state_33283;
(statearr_33398[(13)] = inst_33141);

(statearr_33398[(14)] = inst_33140);

(statearr_33398[(15)] = inst_33139);

(statearr_33398[(17)] = inst_33138);

return statearr_33398;
})();
var statearr_33400_37335 = state_33283__$1;
(statearr_33400_37335[(2)] = null);

(statearr_33400_37335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (14))){
var state_33283__$1 = state_33283;
var statearr_33402_37341 = state_33283__$1;
(statearr_33402_37341[(2)] = null);

(statearr_33402_37341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (45))){
var inst_33271 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33410_37344 = state_33283__$1;
(statearr_33410_37344[(2)] = inst_33271);

(statearr_33410_37344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (26))){
var inst_33201 = (state_33283[(27)]);
var inst_33265 = (state_33283[(2)]);
var inst_33267 = cljs.core.seq(inst_33201);
var state_33283__$1 = (function (){var statearr_33415 = state_33283;
(statearr_33415[(29)] = inst_33265);

return statearr_33415;
})();
if(inst_33267){
var statearr_33416_37347 = state_33283__$1;
(statearr_33416_37347[(1)] = (42));

} else {
var statearr_33421_37348 = state_33283__$1;
(statearr_33421_37348[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (16))){
var inst_33168 = (state_33283[(7)]);
var inst_33170 = cljs.core.chunked_seq_QMARK_(inst_33168);
var state_33283__$1 = state_33283;
if(inst_33170){
var statearr_33430_37350 = state_33283__$1;
(statearr_33430_37350[(1)] = (19));

} else {
var statearr_33431_37351 = state_33283__$1;
(statearr_33431_37351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (38))){
var inst_33258 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33438_37352 = state_33283__$1;
(statearr_33438_37352[(2)] = inst_33258);

(statearr_33438_37352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (30))){
var state_33283__$1 = state_33283;
var statearr_33449_37354 = state_33283__$1;
(statearr_33449_37354[(2)] = null);

(statearr_33449_37354[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (10))){
var inst_33141 = (state_33283[(13)]);
var inst_33139 = (state_33283[(15)]);
var inst_33153 = cljs.core._nth(inst_33139,inst_33141);
var inst_33154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33153,(0),null);
var inst_33155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33153,(1),null);
var state_33283__$1 = (function (){var statearr_33458 = state_33283;
(statearr_33458[(24)] = inst_33154);

return statearr_33458;
})();
if(cljs.core.truth_(inst_33155)){
var statearr_33461_37356 = state_33283__$1;
(statearr_33461_37356[(1)] = (13));

} else {
var statearr_33462_37357 = state_33283__$1;
(statearr_33462_37357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (18))){
var inst_33194 = (state_33283[(2)]);
var state_33283__$1 = state_33283;
var statearr_33468_37358 = state_33283__$1;
(statearr_33468_37358[(2)] = inst_33194);

(statearr_33468_37358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (42))){
var state_33283__$1 = state_33283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33283__$1,(45),dchan);
} else {
if((state_val_33284 === (37))){
var inst_33248 = (state_33283[(22)]);
var inst_33233 = (state_33283[(23)]);
var inst_33129 = (state_33283[(12)]);
var inst_33248__$1 = cljs.core.first(inst_33233);
var inst_33249 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33248__$1,inst_33129,done);
var state_33283__$1 = (function (){var statearr_33474 = state_33283;
(statearr_33474[(22)] = inst_33248__$1);

return statearr_33474;
})();
if(cljs.core.truth_(inst_33249)){
var statearr_33475_37361 = state_33283__$1;
(statearr_33475_37361[(1)] = (39));

} else {
var statearr_33481_37363 = state_33283__$1;
(statearr_33481_37363[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33284 === (8))){
var inst_33141 = (state_33283[(13)]);
var inst_33140 = (state_33283[(14)]);
var inst_33143 = (inst_33141 < inst_33140);
var inst_33144 = inst_33143;
var state_33283__$1 = state_33283;
if(cljs.core.truth_(inst_33144)){
var statearr_33503_37365 = state_33283__$1;
(statearr_33503_37365[(1)] = (10));

} else {
var statearr_33504_37366 = state_33283__$1;
(statearr_33504_37366[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30499__auto__ = null;
var cljs$core$async$mult_$_state_machine__30499__auto____0 = (function (){
var statearr_33507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33507[(0)] = cljs$core$async$mult_$_state_machine__30499__auto__);

(statearr_33507[(1)] = (1));

return statearr_33507;
});
var cljs$core$async$mult_$_state_machine__30499__auto____1 = (function (state_33283){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_33283);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e33510){var ex__30502__auto__ = e33510;
var statearr_33511_37370 = state_33283;
(statearr_33511_37370[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_33283[(4)]))){
var statearr_33513_37372 = state_33283;
(statearr_33513_37372[(1)] = cljs.core.first((state_33283[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37381 = state_33283;
state_33283 = G__37381;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30499__auto__ = function(state_33283){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30499__auto____1.call(this,state_33283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30499__auto____0;
cljs$core$async$mult_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30499__auto____1;
return cljs$core$async$mult_$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_33514 = f__31578__auto__();
(statearr_33514[(6)] = c__31577__auto___37127);

return statearr_33514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33519 = arguments.length;
switch (G__33519) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37411 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37411(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37414 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37414(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37420 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37420(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37444 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37444(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37448 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37448(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37463 = arguments.length;
var i__5727__auto___37464 = (0);
while(true){
if((i__5727__auto___37464 < len__5726__auto___37463)){
args__5732__auto__.push((arguments[i__5727__auto___37464]));

var G__37467 = (i__5727__auto___37464 + (1));
i__5727__auto___37464 = G__37467;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33569){
var map__33573 = p__33569;
var map__33573__$1 = cljs.core.__destructure_map(map__33573);
var opts = map__33573__$1;
var statearr_33574_37480 = state;
(statearr_33574_37480[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33575_37487 = state;
(statearr_33575_37487[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_33578_37494 = state;
(statearr_33578_37494[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33564){
var G__33565 = cljs.core.first(seq33564);
var seq33564__$1 = cljs.core.next(seq33564);
var G__33566 = cljs.core.first(seq33564__$1);
var seq33564__$2 = cljs.core.next(seq33564__$1);
var G__33567 = cljs.core.first(seq33564__$2);
var seq33564__$3 = cljs.core.next(seq33564__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33565,G__33566,G__33567,seq33564__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33586 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33587){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33587 = meta33587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33588,meta33587__$1){
var self__ = this;
var _33588__$1 = this;
return (new cljs.core.async.t_cljs$core$async33586(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33587__$1));
}));

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33588){
var self__ = this;
var _33588__$1 = this;
return self__.meta33587;
}));

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33586.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async33586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33587","meta33587",30624905,null)], null);
}));

(cljs.core.async.t_cljs$core$async33586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33586");

(cljs.core.async.t_cljs$core$async33586.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33586.
 */
cljs.core.async.__GT_t_cljs$core$async33586 = (function cljs$core$async$__GT_t_cljs$core$async33586(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33587){
return (new cljs.core.async.t_cljs$core$async33586(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33587));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33586(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31577__auto___37552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_33682){
var state_val_33683 = (state_33682[(1)]);
if((state_val_33683 === (7))){
var inst_33638 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
if(cljs.core.truth_(inst_33638)){
var statearr_33684_37559 = state_33682__$1;
(statearr_33684_37559[(1)] = (8));

} else {
var statearr_33685_37560 = state_33682__$1;
(statearr_33685_37560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (20))){
var inst_33627 = (state_33682[(7)]);
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33682__$1,(23),out,inst_33627);
} else {
if((state_val_33683 === (1))){
var inst_33606 = calc_state();
var inst_33607 = cljs.core.__destructure_map(inst_33606);
var inst_33608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33607,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33607,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33607,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33611 = inst_33606;
var state_33682__$1 = (function (){var statearr_33688 = state_33682;
(statearr_33688[(8)] = inst_33610);

(statearr_33688[(9)] = inst_33611);

(statearr_33688[(10)] = inst_33609);

(statearr_33688[(11)] = inst_33608);

return statearr_33688;
})();
var statearr_33690_37562 = state_33682__$1;
(statearr_33690_37562[(2)] = null);

(statearr_33690_37562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (24))){
var inst_33614 = (state_33682[(12)]);
var inst_33611 = inst_33614;
var state_33682__$1 = (function (){var statearr_33695 = state_33682;
(statearr_33695[(9)] = inst_33611);

return statearr_33695;
})();
var statearr_33696_37571 = state_33682__$1;
(statearr_33696_37571[(2)] = null);

(statearr_33696_37571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (4))){
var inst_33627 = (state_33682[(7)]);
var inst_33633 = (state_33682[(13)]);
var inst_33626 = (state_33682[(2)]);
var inst_33627__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33626,(0),null);
var inst_33628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33626,(1),null);
var inst_33633__$1 = (inst_33627__$1 == null);
var state_33682__$1 = (function (){var statearr_33704 = state_33682;
(statearr_33704[(7)] = inst_33627__$1);

(statearr_33704[(13)] = inst_33633__$1);

(statearr_33704[(14)] = inst_33628);

return statearr_33704;
})();
if(cljs.core.truth_(inst_33633__$1)){
var statearr_33706_37577 = state_33682__$1;
(statearr_33706_37577[(1)] = (5));

} else {
var statearr_33709_37578 = state_33682__$1;
(statearr_33709_37578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (15))){
var inst_33656 = (state_33682[(15)]);
var inst_33615 = (state_33682[(16)]);
var inst_33656__$1 = cljs.core.empty_QMARK_(inst_33615);
var state_33682__$1 = (function (){var statearr_33713 = state_33682;
(statearr_33713[(15)] = inst_33656__$1);

return statearr_33713;
})();
if(inst_33656__$1){
var statearr_33714_37586 = state_33682__$1;
(statearr_33714_37586[(1)] = (17));

} else {
var statearr_33715_37587 = state_33682__$1;
(statearr_33715_37587[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (21))){
var inst_33614 = (state_33682[(12)]);
var inst_33611 = inst_33614;
var state_33682__$1 = (function (){var statearr_33718 = state_33682;
(statearr_33718[(9)] = inst_33611);

return statearr_33718;
})();
var statearr_33719_37591 = state_33682__$1;
(statearr_33719_37591[(2)] = null);

(statearr_33719_37591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (13))){
var inst_33649 = (state_33682[(2)]);
var inst_33650 = calc_state();
var inst_33611 = inst_33650;
var state_33682__$1 = (function (){var statearr_33725 = state_33682;
(statearr_33725[(9)] = inst_33611);

(statearr_33725[(17)] = inst_33649);

return statearr_33725;
})();
var statearr_33728_37601 = state_33682__$1;
(statearr_33728_37601[(2)] = null);

(statearr_33728_37601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (22))){
var inst_33676 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33730_37603 = state_33682__$1;
(statearr_33730_37603[(2)] = inst_33676);

(statearr_33730_37603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (6))){
var inst_33628 = (state_33682[(14)]);
var inst_33636 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33628,change);
var state_33682__$1 = state_33682;
var statearr_33731_37606 = state_33682__$1;
(statearr_33731_37606[(2)] = inst_33636);

(statearr_33731_37606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (25))){
var state_33682__$1 = state_33682;
var statearr_33733_37607 = state_33682__$1;
(statearr_33733_37607[(2)] = null);

(statearr_33733_37607[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (17))){
var inst_33628 = (state_33682[(14)]);
var inst_33616 = (state_33682[(18)]);
var inst_33658 = (inst_33616.cljs$core$IFn$_invoke$arity$1 ? inst_33616.cljs$core$IFn$_invoke$arity$1(inst_33628) : inst_33616.call(null, inst_33628));
var inst_33659 = cljs.core.not(inst_33658);
var state_33682__$1 = state_33682;
var statearr_33736_37608 = state_33682__$1;
(statearr_33736_37608[(2)] = inst_33659);

(statearr_33736_37608[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (3))){
var inst_33680 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33682__$1,inst_33680);
} else {
if((state_val_33683 === (12))){
var state_33682__$1 = state_33682;
var statearr_33739_37609 = state_33682__$1;
(statearr_33739_37609[(2)] = null);

(statearr_33739_37609[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (2))){
var inst_33611 = (state_33682[(9)]);
var inst_33614 = (state_33682[(12)]);
var inst_33614__$1 = cljs.core.__destructure_map(inst_33611);
var inst_33615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33614__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33614__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33614__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33682__$1 = (function (){var statearr_33742 = state_33682;
(statearr_33742[(12)] = inst_33614__$1);

(statearr_33742[(16)] = inst_33615);

(statearr_33742[(18)] = inst_33616);

return statearr_33742;
})();
return cljs.core.async.ioc_alts_BANG_(state_33682__$1,(4),inst_33617);
} else {
if((state_val_33683 === (23))){
var inst_33667 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
if(cljs.core.truth_(inst_33667)){
var statearr_33747_37613 = state_33682__$1;
(statearr_33747_37613[(1)] = (24));

} else {
var statearr_33749_37614 = state_33682__$1;
(statearr_33749_37614[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (19))){
var inst_33662 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33750_37619 = state_33682__$1;
(statearr_33750_37619[(2)] = inst_33662);

(statearr_33750_37619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (11))){
var inst_33628 = (state_33682[(14)]);
var inst_33646 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33628);
var state_33682__$1 = state_33682;
var statearr_33751_37624 = state_33682__$1;
(statearr_33751_37624[(2)] = inst_33646);

(statearr_33751_37624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (9))){
var inst_33615 = (state_33682[(16)]);
var inst_33653 = (state_33682[(19)]);
var inst_33628 = (state_33682[(14)]);
var inst_33653__$1 = (inst_33615.cljs$core$IFn$_invoke$arity$1 ? inst_33615.cljs$core$IFn$_invoke$arity$1(inst_33628) : inst_33615.call(null, inst_33628));
var state_33682__$1 = (function (){var statearr_33759 = state_33682;
(statearr_33759[(19)] = inst_33653__$1);

return statearr_33759;
})();
if(cljs.core.truth_(inst_33653__$1)){
var statearr_33764_37625 = state_33682__$1;
(statearr_33764_37625[(1)] = (14));

} else {
var statearr_33765_37631 = state_33682__$1;
(statearr_33765_37631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (5))){
var inst_33633 = (state_33682[(13)]);
var state_33682__$1 = state_33682;
var statearr_33771_37632 = state_33682__$1;
(statearr_33771_37632[(2)] = inst_33633);

(statearr_33771_37632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (14))){
var inst_33653 = (state_33682[(19)]);
var state_33682__$1 = state_33682;
var statearr_33775_37633 = state_33682__$1;
(statearr_33775_37633[(2)] = inst_33653);

(statearr_33775_37633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (26))){
var inst_33672 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33776_37662 = state_33682__$1;
(statearr_33776_37662[(2)] = inst_33672);

(statearr_33776_37662[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (16))){
var inst_33664 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
if(cljs.core.truth_(inst_33664)){
var statearr_33778_37671 = state_33682__$1;
(statearr_33778_37671[(1)] = (20));

} else {
var statearr_33779_37672 = state_33682__$1;
(statearr_33779_37672[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (10))){
var inst_33678 = (state_33682[(2)]);
var state_33682__$1 = state_33682;
var statearr_33785_37680 = state_33682__$1;
(statearr_33785_37680[(2)] = inst_33678);

(statearr_33785_37680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (18))){
var inst_33656 = (state_33682[(15)]);
var state_33682__$1 = state_33682;
var statearr_33788_37681 = state_33682__$1;
(statearr_33788_37681[(2)] = inst_33656);

(statearr_33788_37681[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33683 === (8))){
var inst_33627 = (state_33682[(7)]);
var inst_33644 = (inst_33627 == null);
var state_33682__$1 = state_33682;
if(cljs.core.truth_(inst_33644)){
var statearr_33800_37685 = state_33682__$1;
(statearr_33800_37685[(1)] = (11));

} else {
var statearr_33803_37689 = state_33682__$1;
(statearr_33803_37689[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30499__auto__ = null;
var cljs$core$async$mix_$_state_machine__30499__auto____0 = (function (){
var statearr_33805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33805[(0)] = cljs$core$async$mix_$_state_machine__30499__auto__);

(statearr_33805[(1)] = (1));

return statearr_33805;
});
var cljs$core$async$mix_$_state_machine__30499__auto____1 = (function (state_33682){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_33682);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e33806){var ex__30502__auto__ = e33806;
var statearr_33809_37693 = state_33682;
(statearr_33809_37693[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_33682[(4)]))){
var statearr_33811_37703 = state_33682;
(statearr_33811_37703[(1)] = cljs.core.first((state_33682[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37705 = state_33682;
state_33682 = G__37705;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30499__auto__ = function(state_33682){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30499__auto____1.call(this,state_33682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30499__auto____0;
cljs$core$async$mix_$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30499__auto____1;
return cljs$core$async$mix_$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_33813 = f__31578__auto__();
(statearr_33813[(6)] = c__31577__auto___37552);

return statearr_33813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37729 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37729(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37740 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37740(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37763 = (function() {
var G__37770 = null;
var G__37770__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37770__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37770 = function(p,v){
switch(arguments.length){
case 1:
return G__37770__1.call(this,p);
case 2:
return G__37770__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37770.cljs$core$IFn$_invoke$arity$1 = G__37770__1;
G__37770.cljs$core$IFn$_invoke$arity$2 = G__37770__2;
return G__37770;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33943 = arguments.length;
switch (G__33943) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37763(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37763(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33972 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33973){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33973 = meta33973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33974,meta33973__$1){
var self__ = this;
var _33974__$1 = this;
return (new cljs.core.async.t_cljs$core$async33972(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33973__$1));
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33974){
var self__ = this;
var _33974__$1 = this;
return self__.meta33973;
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33973","meta33973",-857198125,null)], null);
}));

(cljs.core.async.t_cljs$core$async33972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33972");

(cljs.core.async.t_cljs$core$async33972.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33972.
 */
cljs.core.async.__GT_t_cljs$core$async33972 = (function cljs$core$async$__GT_t_cljs$core$async33972(ch,topic_fn,buf_fn,mults,ensure_mult,meta33973){
return (new cljs.core.async.t_cljs$core$async33972(ch,topic_fn,buf_fn,mults,ensure_mult,meta33973));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33956 = arguments.length;
switch (G__33956) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33950_SHARP_){
if(cljs.core.truth_((p1__33950_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33950_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33950_SHARP_.call(null, topic)))){
return p1__33950_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33950_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33972(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31577__auto___37861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_34092){
var state_val_34093 = (state_34092[(1)]);
if((state_val_34093 === (7))){
var inst_34087 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34097_37870 = state_34092__$1;
(statearr_34097_37870[(2)] = inst_34087);

(statearr_34097_37870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (20))){
var state_34092__$1 = state_34092;
var statearr_34098_37877 = state_34092__$1;
(statearr_34098_37877[(2)] = null);

(statearr_34098_37877[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (1))){
var state_34092__$1 = state_34092;
var statearr_34099_37885 = state_34092__$1;
(statearr_34099_37885[(2)] = null);

(statearr_34099_37885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (24))){
var inst_34068 = (state_34092[(7)]);
var inst_34079 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34068);
var state_34092__$1 = state_34092;
var statearr_34103_37889 = state_34092__$1;
(statearr_34103_37889[(2)] = inst_34079);

(statearr_34103_37889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (4))){
var inst_34007 = (state_34092[(8)]);
var inst_34007__$1 = (state_34092[(2)]);
var inst_34008 = (inst_34007__$1 == null);
var state_34092__$1 = (function (){var statearr_34104 = state_34092;
(statearr_34104[(8)] = inst_34007__$1);

return statearr_34104;
})();
if(cljs.core.truth_(inst_34008)){
var statearr_34105_37894 = state_34092__$1;
(statearr_34105_37894[(1)] = (5));

} else {
var statearr_34106_37896 = state_34092__$1;
(statearr_34106_37896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (15))){
var inst_34061 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34107_37901 = state_34092__$1;
(statearr_34107_37901[(2)] = inst_34061);

(statearr_34107_37901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (21))){
var inst_34084 = (state_34092[(2)]);
var state_34092__$1 = (function (){var statearr_34109 = state_34092;
(statearr_34109[(9)] = inst_34084);

return statearr_34109;
})();
var statearr_34110_37903 = state_34092__$1;
(statearr_34110_37903[(2)] = null);

(statearr_34110_37903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (13))){
var inst_34040 = (state_34092[(10)]);
var inst_34043 = cljs.core.chunked_seq_QMARK_(inst_34040);
var state_34092__$1 = state_34092;
if(inst_34043){
var statearr_34111_37904 = state_34092__$1;
(statearr_34111_37904[(1)] = (16));

} else {
var statearr_34113_37908 = state_34092__$1;
(statearr_34113_37908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (22))){
var inst_34075 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
if(cljs.core.truth_(inst_34075)){
var statearr_34114_37921 = state_34092__$1;
(statearr_34114_37921[(1)] = (23));

} else {
var statearr_34115_37926 = state_34092__$1;
(statearr_34115_37926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (6))){
var inst_34068 = (state_34092[(7)]);
var inst_34007 = (state_34092[(8)]);
var inst_34070 = (state_34092[(11)]);
var inst_34068__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34007) : topic_fn.call(null, inst_34007));
var inst_34069 = cljs.core.deref(mults);
var inst_34070__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34069,inst_34068__$1);
var state_34092__$1 = (function (){var statearr_34119 = state_34092;
(statearr_34119[(7)] = inst_34068__$1);

(statearr_34119[(11)] = inst_34070__$1);

return statearr_34119;
})();
if(cljs.core.truth_(inst_34070__$1)){
var statearr_34120_37930 = state_34092__$1;
(statearr_34120_37930[(1)] = (19));

} else {
var statearr_34122_37931 = state_34092__$1;
(statearr_34122_37931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (25))){
var inst_34081 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34123_37935 = state_34092__$1;
(statearr_34123_37935[(2)] = inst_34081);

(statearr_34123_37935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (17))){
var inst_34040 = (state_34092[(10)]);
var inst_34050 = cljs.core.first(inst_34040);
var inst_34053 = cljs.core.async.muxch_STAR_(inst_34050);
var inst_34054 = cljs.core.async.close_BANG_(inst_34053);
var inst_34055 = cljs.core.next(inst_34040);
var inst_34017 = inst_34055;
var inst_34018 = null;
var inst_34019 = (0);
var inst_34020 = (0);
var state_34092__$1 = (function (){var statearr_34128 = state_34092;
(statearr_34128[(12)] = inst_34020);

(statearr_34128[(13)] = inst_34054);

(statearr_34128[(14)] = inst_34017);

(statearr_34128[(15)] = inst_34019);

(statearr_34128[(16)] = inst_34018);

return statearr_34128;
})();
var statearr_34129_37942 = state_34092__$1;
(statearr_34129_37942[(2)] = null);

(statearr_34129_37942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (3))){
var inst_34089 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34092__$1,inst_34089);
} else {
if((state_val_34093 === (12))){
var inst_34063 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34131_37944 = state_34092__$1;
(statearr_34131_37944[(2)] = inst_34063);

(statearr_34131_37944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (2))){
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34092__$1,(4),ch);
} else {
if((state_val_34093 === (23))){
var state_34092__$1 = state_34092;
var statearr_34139_37948 = state_34092__$1;
(statearr_34139_37948[(2)] = null);

(statearr_34139_37948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (19))){
var inst_34007 = (state_34092[(8)]);
var inst_34070 = (state_34092[(11)]);
var inst_34073 = cljs.core.async.muxch_STAR_(inst_34070);
var state_34092__$1 = state_34092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34092__$1,(22),inst_34073,inst_34007);
} else {
if((state_val_34093 === (11))){
var inst_34017 = (state_34092[(14)]);
var inst_34040 = (state_34092[(10)]);
var inst_34040__$1 = cljs.core.seq(inst_34017);
var state_34092__$1 = (function (){var statearr_34151 = state_34092;
(statearr_34151[(10)] = inst_34040__$1);

return statearr_34151;
})();
if(inst_34040__$1){
var statearr_34152_37953 = state_34092__$1;
(statearr_34152_37953[(1)] = (13));

} else {
var statearr_34153_37954 = state_34092__$1;
(statearr_34153_37954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (9))){
var inst_34065 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34154_37956 = state_34092__$1;
(statearr_34154_37956[(2)] = inst_34065);

(statearr_34154_37956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (5))){
var inst_34014 = cljs.core.deref(mults);
var inst_34015 = cljs.core.vals(inst_34014);
var inst_34016 = cljs.core.seq(inst_34015);
var inst_34017 = inst_34016;
var inst_34018 = null;
var inst_34019 = (0);
var inst_34020 = (0);
var state_34092__$1 = (function (){var statearr_34164 = state_34092;
(statearr_34164[(12)] = inst_34020);

(statearr_34164[(14)] = inst_34017);

(statearr_34164[(15)] = inst_34019);

(statearr_34164[(16)] = inst_34018);

return statearr_34164;
})();
var statearr_34169_37958 = state_34092__$1;
(statearr_34169_37958[(2)] = null);

(statearr_34169_37958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (14))){
var state_34092__$1 = state_34092;
var statearr_34182_37962 = state_34092__$1;
(statearr_34182_37962[(2)] = null);

(statearr_34182_37962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (16))){
var inst_34040 = (state_34092[(10)]);
var inst_34045 = cljs.core.chunk_first(inst_34040);
var inst_34046 = cljs.core.chunk_rest(inst_34040);
var inst_34047 = cljs.core.count(inst_34045);
var inst_34017 = inst_34046;
var inst_34018 = inst_34045;
var inst_34019 = inst_34047;
var inst_34020 = (0);
var state_34092__$1 = (function (){var statearr_34191 = state_34092;
(statearr_34191[(12)] = inst_34020);

(statearr_34191[(14)] = inst_34017);

(statearr_34191[(15)] = inst_34019);

(statearr_34191[(16)] = inst_34018);

return statearr_34191;
})();
var statearr_34194_37964 = state_34092__$1;
(statearr_34194_37964[(2)] = null);

(statearr_34194_37964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (10))){
var inst_34020 = (state_34092[(12)]);
var inst_34017 = (state_34092[(14)]);
var inst_34019 = (state_34092[(15)]);
var inst_34018 = (state_34092[(16)]);
var inst_34025 = cljs.core._nth(inst_34018,inst_34020);
var inst_34026 = cljs.core.async.muxch_STAR_(inst_34025);
var inst_34027 = cljs.core.async.close_BANG_(inst_34026);
var inst_34028 = (inst_34020 + (1));
var tmp34177 = inst_34017;
var tmp34178 = inst_34019;
var tmp34179 = inst_34018;
var inst_34017__$1 = tmp34177;
var inst_34018__$1 = tmp34179;
var inst_34019__$1 = tmp34178;
var inst_34020__$1 = inst_34028;
var state_34092__$1 = (function (){var statearr_34198 = state_34092;
(statearr_34198[(12)] = inst_34020__$1);

(statearr_34198[(17)] = inst_34027);

(statearr_34198[(14)] = inst_34017__$1);

(statearr_34198[(15)] = inst_34019__$1);

(statearr_34198[(16)] = inst_34018__$1);

return statearr_34198;
})();
var statearr_34206_37965 = state_34092__$1;
(statearr_34206_37965[(2)] = null);

(statearr_34206_37965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (18))){
var inst_34058 = (state_34092[(2)]);
var state_34092__$1 = state_34092;
var statearr_34211_37968 = state_34092__$1;
(statearr_34211_37968[(2)] = inst_34058);

(statearr_34211_37968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34093 === (8))){
var inst_34020 = (state_34092[(12)]);
var inst_34019 = (state_34092[(15)]);
var inst_34022 = (inst_34020 < inst_34019);
var inst_34023 = inst_34022;
var state_34092__$1 = state_34092;
if(cljs.core.truth_(inst_34023)){
var statearr_34215_37971 = state_34092__$1;
(statearr_34215_37971[(1)] = (10));

} else {
var statearr_34217_37973 = state_34092__$1;
(statearr_34217_37973[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_34221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34221[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_34221[(1)] = (1));

return statearr_34221;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_34092){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_34092);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e34229){var ex__30502__auto__ = e34229;
var statearr_34231_37976 = state_34092;
(statearr_34231_37976[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_34092[(4)]))){
var statearr_34232_37980 = state_34092;
(statearr_34232_37980[(1)] = cljs.core.first((state_34092[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37981 = state_34092;
state_34092 = G__37981;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_34092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_34092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_34234 = f__31578__auto__();
(statearr_34234[(6)] = c__31577__auto___37861);

return statearr_34234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34239 = arguments.length;
switch (G__34239) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34247 = arguments.length;
switch (G__34247) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34254 = arguments.length;
switch (G__34254) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31577__auto___38026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_34315){
var state_val_34316 = (state_34315[(1)]);
if((state_val_34316 === (7))){
var state_34315__$1 = state_34315;
var statearr_34317_38033 = state_34315__$1;
(statearr_34317_38033[(2)] = null);

(statearr_34317_38033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (1))){
var state_34315__$1 = state_34315;
var statearr_34319_38041 = state_34315__$1;
(statearr_34319_38041[(2)] = null);

(statearr_34319_38041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (4))){
var inst_34266 = (state_34315[(7)]);
var inst_34267 = (state_34315[(8)]);
var inst_34269 = (inst_34267 < inst_34266);
var state_34315__$1 = state_34315;
if(cljs.core.truth_(inst_34269)){
var statearr_34320_38053 = state_34315__$1;
(statearr_34320_38053[(1)] = (6));

} else {
var statearr_34321_38054 = state_34315__$1;
(statearr_34321_38054[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (15))){
var inst_34298 = (state_34315[(9)]);
var inst_34303 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34298);
var state_34315__$1 = state_34315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34315__$1,(17),out,inst_34303);
} else {
if((state_val_34316 === (13))){
var inst_34298 = (state_34315[(9)]);
var inst_34298__$1 = (state_34315[(2)]);
var inst_34299 = cljs.core.some(cljs.core.nil_QMARK_,inst_34298__$1);
var state_34315__$1 = (function (){var statearr_34325 = state_34315;
(statearr_34325[(9)] = inst_34298__$1);

return statearr_34325;
})();
if(cljs.core.truth_(inst_34299)){
var statearr_34326_38074 = state_34315__$1;
(statearr_34326_38074[(1)] = (14));

} else {
var statearr_34327_38075 = state_34315__$1;
(statearr_34327_38075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (6))){
var state_34315__$1 = state_34315;
var statearr_34330_38078 = state_34315__$1;
(statearr_34330_38078[(2)] = null);

(statearr_34330_38078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (17))){
var inst_34305 = (state_34315[(2)]);
var state_34315__$1 = (function (){var statearr_34339 = state_34315;
(statearr_34339[(10)] = inst_34305);

return statearr_34339;
})();
var statearr_34340_38081 = state_34315__$1;
(statearr_34340_38081[(2)] = null);

(statearr_34340_38081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (3))){
var inst_34310 = (state_34315[(2)]);
var state_34315__$1 = state_34315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34315__$1,inst_34310);
} else {
if((state_val_34316 === (12))){
var _ = (function (){var statearr_34341 = state_34315;
(statearr_34341[(4)] = cljs.core.rest((state_34315[(4)])));

return statearr_34341;
})();
var state_34315__$1 = state_34315;
var ex34338 = (state_34315__$1[(2)]);
var statearr_34343_38087 = state_34315__$1;
(statearr_34343_38087[(5)] = ex34338);


if((ex34338 instanceof Object)){
var statearr_34348_38093 = state_34315__$1;
(statearr_34348_38093[(1)] = (11));

(statearr_34348_38093[(5)] = null);

} else {
throw ex34338;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (2))){
var inst_34265 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34266 = cnt;
var inst_34267 = (0);
var state_34315__$1 = (function (){var statearr_34349 = state_34315;
(statearr_34349[(7)] = inst_34266);

(statearr_34349[(11)] = inst_34265);

(statearr_34349[(8)] = inst_34267);

return statearr_34349;
})();
var statearr_34350_38104 = state_34315__$1;
(statearr_34350_38104[(2)] = null);

(statearr_34350_38104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (11))){
var inst_34272 = (state_34315[(2)]);
var inst_34274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34315__$1 = (function (){var statearr_34351 = state_34315;
(statearr_34351[(12)] = inst_34272);

return statearr_34351;
})();
var statearr_34352_38105 = state_34315__$1;
(statearr_34352_38105[(2)] = inst_34274);

(statearr_34352_38105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (9))){
var inst_34267 = (state_34315[(8)]);
var _ = (function (){var statearr_34354 = state_34315;
(statearr_34354[(4)] = cljs.core.cons((12),(state_34315[(4)])));

return statearr_34354;
})();
var inst_34283 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34267) : chs__$1.call(null, inst_34267));
var inst_34284 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34267) : done.call(null, inst_34267));
var inst_34285 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34283,inst_34284);
var ___$1 = (function (){var statearr_34358 = state_34315;
(statearr_34358[(4)] = cljs.core.rest((state_34315[(4)])));

return statearr_34358;
})();
var state_34315__$1 = state_34315;
var statearr_34359_38106 = state_34315__$1;
(statearr_34359_38106[(2)] = inst_34285);

(statearr_34359_38106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (5))){
var inst_34296 = (state_34315[(2)]);
var state_34315__$1 = (function (){var statearr_34360 = state_34315;
(statearr_34360[(13)] = inst_34296);

return statearr_34360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34315__$1,(13),dchan);
} else {
if((state_val_34316 === (14))){
var inst_34301 = cljs.core.async.close_BANG_(out);
var state_34315__$1 = state_34315;
var statearr_34361_38107 = state_34315__$1;
(statearr_34361_38107[(2)] = inst_34301);

(statearr_34361_38107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (16))){
var inst_34308 = (state_34315[(2)]);
var state_34315__$1 = state_34315;
var statearr_34362_38108 = state_34315__$1;
(statearr_34362_38108[(2)] = inst_34308);

(statearr_34362_38108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (10))){
var inst_34267 = (state_34315[(8)]);
var inst_34288 = (state_34315[(2)]);
var inst_34289 = (inst_34267 + (1));
var inst_34267__$1 = inst_34289;
var state_34315__$1 = (function (){var statearr_34363 = state_34315;
(statearr_34363[(8)] = inst_34267__$1);

(statearr_34363[(14)] = inst_34288);

return statearr_34363;
})();
var statearr_34368_38111 = state_34315__$1;
(statearr_34368_38111[(2)] = null);

(statearr_34368_38111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34316 === (8))){
var inst_34293 = (state_34315[(2)]);
var state_34315__$1 = state_34315;
var statearr_34370_38115 = state_34315__$1;
(statearr_34370_38115[(2)] = inst_34293);

(statearr_34370_38115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_34371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34371[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_34371[(1)] = (1));

return statearr_34371;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_34315){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_34315);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e34372){var ex__30502__auto__ = e34372;
var statearr_34373_38133 = state_34315;
(statearr_34373_38133[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_34315[(4)]))){
var statearr_34374_38142 = state_34315;
(statearr_34374_38142[(1)] = cljs.core.first((state_34315[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38150 = state_34315;
state_34315 = G__38150;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_34315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_34315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_34380 = f__31578__auto__();
(statearr_34380[(6)] = c__31577__auto___38026);

return statearr_34380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34384 = arguments.length;
switch (G__34384) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31577__auto___38172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_34466){
var state_val_34467 = (state_34466[(1)]);
if((state_val_34467 === (7))){
var inst_34432 = (state_34466[(7)]);
var inst_34436 = (state_34466[(8)]);
var inst_34432__$1 = (state_34466[(2)]);
var inst_34436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34432__$1,(0),null);
var inst_34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34432__$1,(1),null);
var inst_34441 = (inst_34436__$1 == null);
var state_34466__$1 = (function (){var statearr_34484 = state_34466;
(statearr_34484[(9)] = inst_34438);

(statearr_34484[(7)] = inst_34432__$1);

(statearr_34484[(8)] = inst_34436__$1);

return statearr_34484;
})();
if(cljs.core.truth_(inst_34441)){
var statearr_34488_38194 = state_34466__$1;
(statearr_34488_38194[(1)] = (8));

} else {
var statearr_34492_38195 = state_34466__$1;
(statearr_34492_38195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (1))){
var inst_34413 = cljs.core.vec(chs);
var inst_34418 = inst_34413;
var state_34466__$1 = (function (){var statearr_34493 = state_34466;
(statearr_34493[(10)] = inst_34418);

return statearr_34493;
})();
var statearr_34494_38199 = state_34466__$1;
(statearr_34494_38199[(2)] = null);

(statearr_34494_38199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (4))){
var inst_34418 = (state_34466[(10)]);
var state_34466__$1 = state_34466;
return cljs.core.async.ioc_alts_BANG_(state_34466__$1,(7),inst_34418);
} else {
if((state_val_34467 === (6))){
var inst_34462 = (state_34466[(2)]);
var state_34466__$1 = state_34466;
var statearr_34495_38211 = state_34466__$1;
(statearr_34495_38211[(2)] = inst_34462);

(statearr_34495_38211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (3))){
var inst_34464 = (state_34466[(2)]);
var state_34466__$1 = state_34466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34466__$1,inst_34464);
} else {
if((state_val_34467 === (2))){
var inst_34418 = (state_34466[(10)]);
var inst_34423 = cljs.core.count(inst_34418);
var inst_34424 = (inst_34423 > (0));
var state_34466__$1 = state_34466;
if(cljs.core.truth_(inst_34424)){
var statearr_34499_38225 = state_34466__$1;
(statearr_34499_38225[(1)] = (4));

} else {
var statearr_34501_38226 = state_34466__$1;
(statearr_34501_38226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (11))){
var inst_34418 = (state_34466[(10)]);
var inst_34455 = (state_34466[(2)]);
var tmp34498 = inst_34418;
var inst_34418__$1 = tmp34498;
var state_34466__$1 = (function (){var statearr_34505 = state_34466;
(statearr_34505[(11)] = inst_34455);

(statearr_34505[(10)] = inst_34418__$1);

return statearr_34505;
})();
var statearr_34506_38227 = state_34466__$1;
(statearr_34506_38227[(2)] = null);

(statearr_34506_38227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (9))){
var inst_34436 = (state_34466[(8)]);
var state_34466__$1 = state_34466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34466__$1,(11),out,inst_34436);
} else {
if((state_val_34467 === (5))){
var inst_34460 = cljs.core.async.close_BANG_(out);
var state_34466__$1 = state_34466;
var statearr_34512_38238 = state_34466__$1;
(statearr_34512_38238[(2)] = inst_34460);

(statearr_34512_38238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (10))){
var inst_34458 = (state_34466[(2)]);
var state_34466__$1 = state_34466;
var statearr_34514_38246 = state_34466__$1;
(statearr_34514_38246[(2)] = inst_34458);

(statearr_34514_38246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34467 === (8))){
var inst_34438 = (state_34466[(9)]);
var inst_34432 = (state_34466[(7)]);
var inst_34436 = (state_34466[(8)]);
var inst_34418 = (state_34466[(10)]);
var inst_34450 = (function (){var cs = inst_34418;
var vec__34426 = inst_34432;
var v = inst_34436;
var c = inst_34438;
return (function (p1__34382_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34382_SHARP_);
});
})();
var inst_34451 = cljs.core.filterv(inst_34450,inst_34418);
var inst_34418__$1 = inst_34451;
var state_34466__$1 = (function (){var statearr_34518 = state_34466;
(statearr_34518[(10)] = inst_34418__$1);

return statearr_34518;
})();
var statearr_34519_38258 = state_34466__$1;
(statearr_34519_38258[(2)] = null);

(statearr_34519_38258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_34522 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34522[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_34522[(1)] = (1));

return statearr_34522;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_34466){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_34466);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e34523){var ex__30502__auto__ = e34523;
var statearr_34524_38265 = state_34466;
(statearr_34524_38265[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_34466[(4)]))){
var statearr_34525_38267 = state_34466;
(statearr_34525_38267[(1)] = cljs.core.first((state_34466[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38269 = state_34466;
state_34466 = G__38269;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_34466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_34466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_34528 = f__31578__auto__();
(statearr_34528[(6)] = c__31577__auto___38172);

return statearr_34528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34535 = arguments.length;
switch (G__34535) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31577__auto___38277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_34564){
var state_val_34565 = (state_34564[(1)]);
if((state_val_34565 === (7))){
var inst_34541 = (state_34564[(7)]);
var inst_34541__$1 = (state_34564[(2)]);
var inst_34542 = (inst_34541__$1 == null);
var inst_34543 = cljs.core.not(inst_34542);
var state_34564__$1 = (function (){var statearr_34575 = state_34564;
(statearr_34575[(7)] = inst_34541__$1);

return statearr_34575;
})();
if(inst_34543){
var statearr_34578_38285 = state_34564__$1;
(statearr_34578_38285[(1)] = (8));

} else {
var statearr_34579_38286 = state_34564__$1;
(statearr_34579_38286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (1))){
var inst_34536 = (0);
var state_34564__$1 = (function (){var statearr_34580 = state_34564;
(statearr_34580[(8)] = inst_34536);

return statearr_34580;
})();
var statearr_34581_38288 = state_34564__$1;
(statearr_34581_38288[(2)] = null);

(statearr_34581_38288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (4))){
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34564__$1,(7),ch);
} else {
if((state_val_34565 === (6))){
var inst_34556 = (state_34564[(2)]);
var state_34564__$1 = state_34564;
var statearr_34582_38294 = state_34564__$1;
(statearr_34582_38294[(2)] = inst_34556);

(statearr_34582_38294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (3))){
var inst_34558 = (state_34564[(2)]);
var inst_34559 = cljs.core.async.close_BANG_(out);
var state_34564__$1 = (function (){var statearr_34583 = state_34564;
(statearr_34583[(9)] = inst_34558);

return statearr_34583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34564__$1,inst_34559);
} else {
if((state_val_34565 === (2))){
var inst_34536 = (state_34564[(8)]);
var inst_34538 = (inst_34536 < n);
var state_34564__$1 = state_34564;
if(cljs.core.truth_(inst_34538)){
var statearr_34590_38298 = state_34564__$1;
(statearr_34590_38298[(1)] = (4));

} else {
var statearr_34593_38300 = state_34564__$1;
(statearr_34593_38300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (11))){
var inst_34536 = (state_34564[(8)]);
var inst_34546 = (state_34564[(2)]);
var inst_34549 = (inst_34536 + (1));
var inst_34536__$1 = inst_34549;
var state_34564__$1 = (function (){var statearr_34597 = state_34564;
(statearr_34597[(8)] = inst_34536__$1);

(statearr_34597[(10)] = inst_34546);

return statearr_34597;
})();
var statearr_34599_38305 = state_34564__$1;
(statearr_34599_38305[(2)] = null);

(statearr_34599_38305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (9))){
var state_34564__$1 = state_34564;
var statearr_34602_38310 = state_34564__$1;
(statearr_34602_38310[(2)] = null);

(statearr_34602_38310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (5))){
var state_34564__$1 = state_34564;
var statearr_34603_38313 = state_34564__$1;
(statearr_34603_38313[(2)] = null);

(statearr_34603_38313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (10))){
var inst_34553 = (state_34564[(2)]);
var state_34564__$1 = state_34564;
var statearr_34607_38316 = state_34564__$1;
(statearr_34607_38316[(2)] = inst_34553);

(statearr_34607_38316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34565 === (8))){
var inst_34541 = (state_34564[(7)]);
var state_34564__$1 = state_34564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34564__$1,(11),out,inst_34541);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_34621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34621[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_34621[(1)] = (1));

return statearr_34621;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_34564){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_34564);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e34622){var ex__30502__auto__ = e34622;
var statearr_34623_38322 = state_34564;
(statearr_34623_38322[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_34564[(4)]))){
var statearr_34628_38324 = state_34564;
(statearr_34628_38324[(1)] = cljs.core.first((state_34564[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38327 = state_34564;
state_34564 = G__38327;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_34564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_34564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_34629 = f__31578__auto__();
(statearr_34629[(6)] = c__31577__auto___38277);

return statearr_34629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34652 = (function (f,ch,meta34643,_,fn1,meta34653){
this.f = f;
this.ch = ch;
this.meta34643 = meta34643;
this._ = _;
this.fn1 = fn1;
this.meta34653 = meta34653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34654,meta34653__$1){
var self__ = this;
var _34654__$1 = this;
return (new cljs.core.async.t_cljs$core$async34652(self__.f,self__.ch,self__.meta34643,self__._,self__.fn1,meta34653__$1));
}));

(cljs.core.async.t_cljs$core$async34652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34654){
var self__ = this;
var _34654__$1 = this;
return self__.meta34653;
}));

(cljs.core.async.t_cljs$core$async34652.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34638_SHARP_){
var G__34656 = (((p1__34638_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34638_SHARP_) : self__.f.call(null, p1__34638_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34656) : f1.call(null, G__34656));
});
}));

(cljs.core.async.t_cljs$core$async34652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34643","meta34643",266629022,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34642","cljs.core.async/t_cljs$core$async34642",1537093779,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34653","meta34653",417295894,null)], null);
}));

(cljs.core.async.t_cljs$core$async34652.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34652");

(cljs.core.async.t_cljs$core$async34652.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34652");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34652.
 */
cljs.core.async.__GT_t_cljs$core$async34652 = (function cljs$core$async$__GT_t_cljs$core$async34652(f,ch,meta34643,_,fn1,meta34653){
return (new cljs.core.async.t_cljs$core$async34652(f,ch,meta34643,_,fn1,meta34653));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34642 = (function (f,ch,meta34643){
this.f = f;
this.ch = ch;
this.meta34643 = meta34643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34644,meta34643__$1){
var self__ = this;
var _34644__$1 = this;
return (new cljs.core.async.t_cljs$core$async34642(self__.f,self__.ch,meta34643__$1));
}));

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34644){
var self__ = this;
var _34644__$1 = this;
return self__.meta34643;
}));

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34652(self__.f,self__.ch,self__.meta34643,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34676 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34676) : self__.f.call(null, G__34676));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34643","meta34643",266629022,null)], null);
}));

(cljs.core.async.t_cljs$core$async34642.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34642");

(cljs.core.async.t_cljs$core$async34642.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34642");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34642.
 */
cljs.core.async.__GT_t_cljs$core$async34642 = (function cljs$core$async$__GT_t_cljs$core$async34642(f,ch,meta34643){
return (new cljs.core.async.t_cljs$core$async34642(f,ch,meta34643));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34642(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34688 = (function (f,ch,meta34689){
this.f = f;
this.ch = ch;
this.meta34689 = meta34689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34690,meta34689__$1){
var self__ = this;
var _34690__$1 = this;
return (new cljs.core.async.t_cljs$core$async34688(self__.f,self__.ch,meta34689__$1));
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34690){
var self__ = this;
var _34690__$1 = this;
return self__.meta34689;
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34689","meta34689",-1828872425,null)], null);
}));

(cljs.core.async.t_cljs$core$async34688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34688");

(cljs.core.async.t_cljs$core$async34688.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34688.
 */
cljs.core.async.__GT_t_cljs$core$async34688 = (function cljs$core$async$__GT_t_cljs$core$async34688(f,ch,meta34689){
return (new cljs.core.async.t_cljs$core$async34688(f,ch,meta34689));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34688(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34704 = (function (p,ch,meta34705){
this.p = p;
this.ch = ch;
this.meta34705 = meta34705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34706,meta34705__$1){
var self__ = this;
var _34706__$1 = this;
return (new cljs.core.async.t_cljs$core$async34704(self__.p,self__.ch,meta34705__$1));
}));

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34706){
var self__ = this;
var _34706__$1 = this;
return self__.meta34705;
}));

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34704.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34705","meta34705",612420561,null)], null);
}));

(cljs.core.async.t_cljs$core$async34704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34704");

(cljs.core.async.t_cljs$core$async34704.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34704.
 */
cljs.core.async.__GT_t_cljs$core$async34704 = (function cljs$core$async$__GT_t_cljs$core$async34704(p,ch,meta34705){
return (new cljs.core.async.t_cljs$core$async34704(p,ch,meta34705));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34704(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34803 = arguments.length;
switch (G__34803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31577__auto___38412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_34848){
var state_val_34849 = (state_34848[(1)]);
if((state_val_34849 === (7))){
var inst_34842 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34861_38416 = state_34848__$1;
(statearr_34861_38416[(2)] = inst_34842);

(statearr_34861_38416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (1))){
var state_34848__$1 = state_34848;
var statearr_34862_38424 = state_34848__$1;
(statearr_34862_38424[(2)] = null);

(statearr_34862_38424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (4))){
var inst_34825 = (state_34848[(7)]);
var inst_34825__$1 = (state_34848[(2)]);
var inst_34826 = (inst_34825__$1 == null);
var state_34848__$1 = (function (){var statearr_34873 = state_34848;
(statearr_34873[(7)] = inst_34825__$1);

return statearr_34873;
})();
if(cljs.core.truth_(inst_34826)){
var statearr_34880_38433 = state_34848__$1;
(statearr_34880_38433[(1)] = (5));

} else {
var statearr_34886_38441 = state_34848__$1;
(statearr_34886_38441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (6))){
var inst_34825 = (state_34848[(7)]);
var inst_34830 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34825) : p.call(null, inst_34825));
var state_34848__$1 = state_34848;
if(cljs.core.truth_(inst_34830)){
var statearr_34887_38447 = state_34848__$1;
(statearr_34887_38447[(1)] = (8));

} else {
var statearr_34891_38450 = state_34848__$1;
(statearr_34891_38450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (3))){
var inst_34844 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34848__$1,inst_34844);
} else {
if((state_val_34849 === (2))){
var state_34848__$1 = state_34848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34848__$1,(4),ch);
} else {
if((state_val_34849 === (11))){
var inst_34833 = (state_34848[(2)]);
var state_34848__$1 = state_34848;
var statearr_34898_38453 = state_34848__$1;
(statearr_34898_38453[(2)] = inst_34833);

(statearr_34898_38453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (9))){
var state_34848__$1 = state_34848;
var statearr_34900_38454 = state_34848__$1;
(statearr_34900_38454[(2)] = null);

(statearr_34900_38454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (5))){
var inst_34828 = cljs.core.async.close_BANG_(out);
var state_34848__$1 = state_34848;
var statearr_34901_38458 = state_34848__$1;
(statearr_34901_38458[(2)] = inst_34828);

(statearr_34901_38458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (10))){
var inst_34836 = (state_34848[(2)]);
var state_34848__$1 = (function (){var statearr_34902 = state_34848;
(statearr_34902[(8)] = inst_34836);

return statearr_34902;
})();
var statearr_34903_38461 = state_34848__$1;
(statearr_34903_38461[(2)] = null);

(statearr_34903_38461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34849 === (8))){
var inst_34825 = (state_34848[(7)]);
var state_34848__$1 = state_34848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34848__$1,(11),out,inst_34825);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_34904 = [null,null,null,null,null,null,null,null,null];
(statearr_34904[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_34904[(1)] = (1));

return statearr_34904;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_34848){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_34848);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e34905){var ex__30502__auto__ = e34905;
var statearr_34906_38470 = state_34848;
(statearr_34906_38470[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_34848[(4)]))){
var statearr_34907_38474 = state_34848;
(statearr_34907_38474[(1)] = cljs.core.first((state_34848[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38484 = state_34848;
state_34848 = G__38484;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_34848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_34848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_34908 = f__31578__auto__();
(statearr_34908[(6)] = c__31577__auto___38412);

return statearr_34908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34910 = arguments.length;
switch (G__34910) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31577__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_34993){
var state_val_34994 = (state_34993[(1)]);
if((state_val_34994 === (7))){
var inst_34989 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_34999_38492 = state_34993__$1;
(statearr_34999_38492[(2)] = inst_34989);

(statearr_34999_38492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (20))){
var inst_34952 = (state_34993[(7)]);
var inst_34968 = (state_34993[(2)]);
var inst_34969 = cljs.core.next(inst_34952);
var inst_34924 = inst_34969;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34993__$1 = (function (){var statearr_35019 = state_34993;
(statearr_35019[(8)] = inst_34927);

(statearr_35019[(9)] = inst_34925);

(statearr_35019[(10)] = inst_34924);

(statearr_35019[(11)] = inst_34926);

(statearr_35019[(12)] = inst_34968);

return statearr_35019;
})();
var statearr_35027_38495 = state_34993__$1;
(statearr_35027_38495[(2)] = null);

(statearr_35027_38495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (1))){
var state_34993__$1 = state_34993;
var statearr_35032_38497 = state_34993__$1;
(statearr_35032_38497[(2)] = null);

(statearr_35032_38497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (4))){
var inst_34913 = (state_34993[(13)]);
var inst_34913__$1 = (state_34993[(2)]);
var inst_34914 = (inst_34913__$1 == null);
var state_34993__$1 = (function (){var statearr_35037 = state_34993;
(statearr_35037[(13)] = inst_34913__$1);

return statearr_35037;
})();
if(cljs.core.truth_(inst_34914)){
var statearr_35038_38499 = state_34993__$1;
(statearr_35038_38499[(1)] = (5));

} else {
var statearr_35039_38500 = state_34993__$1;
(statearr_35039_38500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (15))){
var state_34993__$1 = state_34993;
var statearr_35044_38501 = state_34993__$1;
(statearr_35044_38501[(2)] = null);

(statearr_35044_38501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (21))){
var state_34993__$1 = state_34993;
var statearr_35045_38502 = state_34993__$1;
(statearr_35045_38502[(2)] = null);

(statearr_35045_38502[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (13))){
var inst_34927 = (state_34993[(8)]);
var inst_34925 = (state_34993[(9)]);
var inst_34924 = (state_34993[(10)]);
var inst_34926 = (state_34993[(11)]);
var inst_34943 = (state_34993[(2)]);
var inst_34947 = (inst_34927 + (1));
var tmp35041 = inst_34925;
var tmp35042 = inst_34924;
var tmp35043 = inst_34926;
var inst_34924__$1 = tmp35042;
var inst_34925__$1 = tmp35041;
var inst_34926__$1 = tmp35043;
var inst_34927__$1 = inst_34947;
var state_34993__$1 = (function (){var statearr_35047 = state_34993;
(statearr_35047[(8)] = inst_34927__$1);

(statearr_35047[(9)] = inst_34925__$1);

(statearr_35047[(10)] = inst_34924__$1);

(statearr_35047[(11)] = inst_34926__$1);

(statearr_35047[(14)] = inst_34943);

return statearr_35047;
})();
var statearr_35048_38503 = state_34993__$1;
(statearr_35048_38503[(2)] = null);

(statearr_35048_38503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (22))){
var state_34993__$1 = state_34993;
var statearr_35049_38504 = state_34993__$1;
(statearr_35049_38504[(2)] = null);

(statearr_35049_38504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (6))){
var inst_34913 = (state_34993[(13)]);
var inst_34922 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34913) : f.call(null, inst_34913));
var inst_34923 = cljs.core.seq(inst_34922);
var inst_34924 = inst_34923;
var inst_34925 = null;
var inst_34926 = (0);
var inst_34927 = (0);
var state_34993__$1 = (function (){var statearr_35050 = state_34993;
(statearr_35050[(8)] = inst_34927);

(statearr_35050[(9)] = inst_34925);

(statearr_35050[(10)] = inst_34924);

(statearr_35050[(11)] = inst_34926);

return statearr_35050;
})();
var statearr_35057_38509 = state_34993__$1;
(statearr_35057_38509[(2)] = null);

(statearr_35057_38509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (17))){
var inst_34952 = (state_34993[(7)]);
var inst_34956 = cljs.core.chunk_first(inst_34952);
var inst_34957 = cljs.core.chunk_rest(inst_34952);
var inst_34958 = cljs.core.count(inst_34956);
var inst_34924 = inst_34957;
var inst_34925 = inst_34956;
var inst_34926 = inst_34958;
var inst_34927 = (0);
var state_34993__$1 = (function (){var statearr_35058 = state_34993;
(statearr_35058[(8)] = inst_34927);

(statearr_35058[(9)] = inst_34925);

(statearr_35058[(10)] = inst_34924);

(statearr_35058[(11)] = inst_34926);

return statearr_35058;
})();
var statearr_35059_38511 = state_34993__$1;
(statearr_35059_38511[(2)] = null);

(statearr_35059_38511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (3))){
var inst_34991 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34993__$1,inst_34991);
} else {
if((state_val_34994 === (12))){
var inst_34977 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_35060_38513 = state_34993__$1;
(statearr_35060_38513[(2)] = inst_34977);

(statearr_35060_38513[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (2))){
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34993__$1,(4),in$);
} else {
if((state_val_34994 === (23))){
var inst_34987 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_35064_38514 = state_34993__$1;
(statearr_35064_38514[(2)] = inst_34987);

(statearr_35064_38514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (19))){
var inst_34972 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_35065_38515 = state_34993__$1;
(statearr_35065_38515[(2)] = inst_34972);

(statearr_35065_38515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (11))){
var inst_34952 = (state_34993[(7)]);
var inst_34924 = (state_34993[(10)]);
var inst_34952__$1 = cljs.core.seq(inst_34924);
var state_34993__$1 = (function (){var statearr_35066 = state_34993;
(statearr_35066[(7)] = inst_34952__$1);

return statearr_35066;
})();
if(inst_34952__$1){
var statearr_35070_38516 = state_34993__$1;
(statearr_35070_38516[(1)] = (14));

} else {
var statearr_35071_38517 = state_34993__$1;
(statearr_35071_38517[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (9))){
var inst_34979 = (state_34993[(2)]);
var inst_34980 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34993__$1 = (function (){var statearr_35072 = state_34993;
(statearr_35072[(15)] = inst_34979);

return statearr_35072;
})();
if(cljs.core.truth_(inst_34980)){
var statearr_35073_38518 = state_34993__$1;
(statearr_35073_38518[(1)] = (21));

} else {
var statearr_35074_38519 = state_34993__$1;
(statearr_35074_38519[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (5))){
var inst_34916 = cljs.core.async.close_BANG_(out);
var state_34993__$1 = state_34993;
var statearr_35075_38520 = state_34993__$1;
(statearr_35075_38520[(2)] = inst_34916);

(statearr_35075_38520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (14))){
var inst_34952 = (state_34993[(7)]);
var inst_34954 = cljs.core.chunked_seq_QMARK_(inst_34952);
var state_34993__$1 = state_34993;
if(inst_34954){
var statearr_35076_38522 = state_34993__$1;
(statearr_35076_38522[(1)] = (17));

} else {
var statearr_35077_38524 = state_34993__$1;
(statearr_35077_38524[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (16))){
var inst_34975 = (state_34993[(2)]);
var state_34993__$1 = state_34993;
var statearr_35084_38525 = state_34993__$1;
(statearr_35084_38525[(2)] = inst_34975);

(statearr_35084_38525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34994 === (10))){
var inst_34927 = (state_34993[(8)]);
var inst_34925 = (state_34993[(9)]);
var inst_34935 = cljs.core._nth(inst_34925,inst_34927);
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34993__$1,(13),out,inst_34935);
} else {
if((state_val_34994 === (18))){
var inst_34952 = (state_34993[(7)]);
var inst_34965 = cljs.core.first(inst_34952);
var state_34993__$1 = state_34993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34993__$1,(20),out,inst_34965);
} else {
if((state_val_34994 === (8))){
var inst_34927 = (state_34993[(8)]);
var inst_34926 = (state_34993[(11)]);
var inst_34932 = (inst_34927 < inst_34926);
var inst_34933 = inst_34932;
var state_34993__$1 = state_34993;
if(cljs.core.truth_(inst_34933)){
var statearr_35088_38526 = state_34993__$1;
(statearr_35088_38526[(1)] = (10));

} else {
var statearr_35089_38527 = state_34993__$1;
(statearr_35089_38527[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30499__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30499__auto____0 = (function (){
var statearr_35091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35091[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30499__auto__);

(statearr_35091[(1)] = (1));

return statearr_35091;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30499__auto____1 = (function (state_34993){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_34993);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e35092){var ex__30502__auto__ = e35092;
var statearr_35093_38529 = state_34993;
(statearr_35093_38529[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_34993[(4)]))){
var statearr_35094_38530 = state_34993;
(statearr_35094_38530[(1)] = cljs.core.first((state_34993[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38531 = state_34993;
state_34993 = G__38531;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30499__auto__ = function(state_34993){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30499__auto____1.call(this,state_34993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30499__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30499__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_35098 = f__31578__auto__();
(statearr_35098[(6)] = c__31577__auto__);

return statearr_35098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));

return c__31577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35109 = arguments.length;
switch (G__35109) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35118 = arguments.length;
switch (G__35118) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35132 = arguments.length;
switch (G__35132) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31577__auto___38542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_35163){
var state_val_35164 = (state_35163[(1)]);
if((state_val_35164 === (7))){
var inst_35158 = (state_35163[(2)]);
var state_35163__$1 = state_35163;
var statearr_35169_38544 = state_35163__$1;
(statearr_35169_38544[(2)] = inst_35158);

(statearr_35169_38544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (1))){
var inst_35134 = null;
var state_35163__$1 = (function (){var statearr_35171 = state_35163;
(statearr_35171[(7)] = inst_35134);

return statearr_35171;
})();
var statearr_35172_38546 = state_35163__$1;
(statearr_35172_38546[(2)] = null);

(statearr_35172_38546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (4))){
var inst_35140 = (state_35163[(8)]);
var inst_35140__$1 = (state_35163[(2)]);
var inst_35143 = (inst_35140__$1 == null);
var inst_35144 = cljs.core.not(inst_35143);
var state_35163__$1 = (function (){var statearr_35174 = state_35163;
(statearr_35174[(8)] = inst_35140__$1);

return statearr_35174;
})();
if(inst_35144){
var statearr_35177_38547 = state_35163__$1;
(statearr_35177_38547[(1)] = (5));

} else {
var statearr_35180_38549 = state_35163__$1;
(statearr_35180_38549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (6))){
var state_35163__$1 = state_35163;
var statearr_35181_38550 = state_35163__$1;
(statearr_35181_38550[(2)] = null);

(statearr_35181_38550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (3))){
var inst_35160 = (state_35163[(2)]);
var inst_35161 = cljs.core.async.close_BANG_(out);
var state_35163__$1 = (function (){var statearr_35193 = state_35163;
(statearr_35193[(9)] = inst_35160);

return statearr_35193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35163__$1,inst_35161);
} else {
if((state_val_35164 === (2))){
var state_35163__$1 = state_35163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35163__$1,(4),ch);
} else {
if((state_val_35164 === (11))){
var inst_35140 = (state_35163[(8)]);
var inst_35152 = (state_35163[(2)]);
var inst_35134 = inst_35140;
var state_35163__$1 = (function (){var statearr_35218 = state_35163;
(statearr_35218[(7)] = inst_35134);

(statearr_35218[(10)] = inst_35152);

return statearr_35218;
})();
var statearr_35222_38554 = state_35163__$1;
(statearr_35222_38554[(2)] = null);

(statearr_35222_38554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (9))){
var inst_35140 = (state_35163[(8)]);
var state_35163__$1 = state_35163;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35163__$1,(11),out,inst_35140);
} else {
if((state_val_35164 === (5))){
var inst_35134 = (state_35163[(7)]);
var inst_35140 = (state_35163[(8)]);
var inst_35146 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35140,inst_35134);
var state_35163__$1 = state_35163;
if(inst_35146){
var statearr_35237_38555 = state_35163__$1;
(statearr_35237_38555[(1)] = (8));

} else {
var statearr_35244_38558 = state_35163__$1;
(statearr_35244_38558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (10))){
var inst_35155 = (state_35163[(2)]);
var state_35163__$1 = state_35163;
var statearr_35250_38561 = state_35163__$1;
(statearr_35250_38561[(2)] = inst_35155);

(statearr_35250_38561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35164 === (8))){
var inst_35134 = (state_35163[(7)]);
var tmp35234 = inst_35134;
var inst_35134__$1 = tmp35234;
var state_35163__$1 = (function (){var statearr_35256 = state_35163;
(statearr_35256[(7)] = inst_35134__$1);

return statearr_35256;
})();
var statearr_35260_38566 = state_35163__$1;
(statearr_35260_38566[(2)] = null);

(statearr_35260_38566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_35264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35264[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_35264[(1)] = (1));

return statearr_35264;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_35163){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_35163);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e35271){var ex__30502__auto__ = e35271;
var statearr_35272_38571 = state_35163;
(statearr_35272_38571[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_35163[(4)]))){
var statearr_35277_38572 = state_35163;
(statearr_35277_38572[(1)] = cljs.core.first((state_35163[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38573 = state_35163;
state_35163 = G__38573;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_35163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_35163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_35298 = f__31578__auto__();
(statearr_35298[(6)] = c__31577__auto___38542);

return statearr_35298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35311 = arguments.length;
switch (G__35311) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31577__auto___38576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_35358){
var state_val_35359 = (state_35358[(1)]);
if((state_val_35359 === (7))){
var inst_35353 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35366_38577 = state_35358__$1;
(statearr_35366_38577[(2)] = inst_35353);

(statearr_35366_38577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (1))){
var inst_35317 = (new Array(n));
var inst_35318 = inst_35317;
var inst_35319 = (0);
var state_35358__$1 = (function (){var statearr_35374 = state_35358;
(statearr_35374[(7)] = inst_35319);

(statearr_35374[(8)] = inst_35318);

return statearr_35374;
})();
var statearr_35376_38582 = state_35358__$1;
(statearr_35376_38582[(2)] = null);

(statearr_35376_38582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (4))){
var inst_35324 = (state_35358[(9)]);
var inst_35324__$1 = (state_35358[(2)]);
var inst_35325 = (inst_35324__$1 == null);
var inst_35326 = cljs.core.not(inst_35325);
var state_35358__$1 = (function (){var statearr_35383 = state_35358;
(statearr_35383[(9)] = inst_35324__$1);

return statearr_35383;
})();
if(inst_35326){
var statearr_35390_38583 = state_35358__$1;
(statearr_35390_38583[(1)] = (5));

} else {
var statearr_35391_38584 = state_35358__$1;
(statearr_35391_38584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (15))){
var inst_35347 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35396_38586 = state_35358__$1;
(statearr_35396_38586[(2)] = inst_35347);

(statearr_35396_38586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (13))){
var state_35358__$1 = state_35358;
var statearr_35397_38587 = state_35358__$1;
(statearr_35397_38587[(2)] = null);

(statearr_35397_38587[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (6))){
var inst_35319 = (state_35358[(7)]);
var inst_35343 = (inst_35319 > (0));
var state_35358__$1 = state_35358;
if(cljs.core.truth_(inst_35343)){
var statearr_35407_38588 = state_35358__$1;
(statearr_35407_38588[(1)] = (12));

} else {
var statearr_35408_38589 = state_35358__$1;
(statearr_35408_38589[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (3))){
var inst_35356 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35358__$1,inst_35356);
} else {
if((state_val_35359 === (12))){
var inst_35318 = (state_35358[(8)]);
var inst_35345 = cljs.core.vec(inst_35318);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35358__$1,(15),out,inst_35345);
} else {
if((state_val_35359 === (2))){
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35358__$1,(4),ch);
} else {
if((state_val_35359 === (11))){
var inst_35336 = (state_35358[(2)]);
var inst_35337 = (new Array(n));
var inst_35318 = inst_35337;
var inst_35319 = (0);
var state_35358__$1 = (function (){var statearr_35419 = state_35358;
(statearr_35419[(7)] = inst_35319);

(statearr_35419[(8)] = inst_35318);

(statearr_35419[(10)] = inst_35336);

return statearr_35419;
})();
var statearr_35420_38591 = state_35358__$1;
(statearr_35420_38591[(2)] = null);

(statearr_35420_38591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (9))){
var inst_35318 = (state_35358[(8)]);
var inst_35334 = cljs.core.vec(inst_35318);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35358__$1,(11),out,inst_35334);
} else {
if((state_val_35359 === (5))){
var inst_35319 = (state_35358[(7)]);
var inst_35324 = (state_35358[(9)]);
var inst_35318 = (state_35358[(8)]);
var inst_35329 = (state_35358[(11)]);
var inst_35328 = (inst_35318[inst_35319] = inst_35324);
var inst_35329__$1 = (inst_35319 + (1));
var inst_35330 = (inst_35329__$1 < n);
var state_35358__$1 = (function (){var statearr_35422 = state_35358;
(statearr_35422[(11)] = inst_35329__$1);

(statearr_35422[(12)] = inst_35328);

return statearr_35422;
})();
if(cljs.core.truth_(inst_35330)){
var statearr_35428_38593 = state_35358__$1;
(statearr_35428_38593[(1)] = (8));

} else {
var statearr_35432_38594 = state_35358__$1;
(statearr_35432_38594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (14))){
var inst_35350 = (state_35358[(2)]);
var inst_35351 = cljs.core.async.close_BANG_(out);
var state_35358__$1 = (function (){var statearr_35439 = state_35358;
(statearr_35439[(13)] = inst_35350);

return statearr_35439;
})();
var statearr_35440_38595 = state_35358__$1;
(statearr_35440_38595[(2)] = inst_35351);

(statearr_35440_38595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (10))){
var inst_35340 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35441_38596 = state_35358__$1;
(statearr_35441_38596[(2)] = inst_35340);

(statearr_35441_38596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (8))){
var inst_35318 = (state_35358[(8)]);
var inst_35329 = (state_35358[(11)]);
var tmp35438 = inst_35318;
var inst_35318__$1 = tmp35438;
var inst_35319 = inst_35329;
var state_35358__$1 = (function (){var statearr_35443 = state_35358;
(statearr_35443[(7)] = inst_35319);

(statearr_35443[(8)] = inst_35318__$1);

return statearr_35443;
})();
var statearr_35446_38597 = state_35358__$1;
(statearr_35446_38597[(2)] = null);

(statearr_35446_38597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_35454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35454[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_35454[(1)] = (1));

return statearr_35454;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_35358){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_35358);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e35458){var ex__30502__auto__ = e35458;
var statearr_35459_38602 = state_35358;
(statearr_35459_38602[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_35358[(4)]))){
var statearr_35461_38603 = state_35358;
(statearr_35461_38603[(1)] = cljs.core.first((state_35358[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38604 = state_35358;
state_35358 = G__38604;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_35358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_35358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_35465 = f__31578__auto__();
(statearr_35465[(6)] = c__31577__auto___38576);

return statearr_35465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35483 = arguments.length;
switch (G__35483) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31577__auto___38606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31578__auto__ = (function (){var switch__30498__auto__ = (function (state_35564){
var state_val_35565 = (state_35564[(1)]);
if((state_val_35565 === (7))){
var inst_35557 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
var statearr_35579_38607 = state_35564__$1;
(statearr_35579_38607[(2)] = inst_35557);

(statearr_35579_38607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (1))){
var inst_35499 = [];
var inst_35500 = inst_35499;
var inst_35501 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35564__$1 = (function (){var statearr_35581 = state_35564;
(statearr_35581[(7)] = inst_35500);

(statearr_35581[(8)] = inst_35501);

return statearr_35581;
})();
var statearr_35585_38608 = state_35564__$1;
(statearr_35585_38608[(2)] = null);

(statearr_35585_38608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (4))){
var inst_35505 = (state_35564[(9)]);
var inst_35505__$1 = (state_35564[(2)]);
var inst_35507 = (inst_35505__$1 == null);
var inst_35508 = cljs.core.not(inst_35507);
var state_35564__$1 = (function (){var statearr_35588 = state_35564;
(statearr_35588[(9)] = inst_35505__$1);

return statearr_35588;
})();
if(inst_35508){
var statearr_35593_38609 = state_35564__$1;
(statearr_35593_38609[(1)] = (5));

} else {
var statearr_35597_38610 = state_35564__$1;
(statearr_35597_38610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (15))){
var inst_35500 = (state_35564[(7)]);
var inst_35548 = cljs.core.vec(inst_35500);
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35564__$1,(18),out,inst_35548);
} else {
if((state_val_35565 === (13))){
var inst_35540 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
var statearr_35605_38611 = state_35564__$1;
(statearr_35605_38611[(2)] = inst_35540);

(statearr_35605_38611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (6))){
var inst_35500 = (state_35564[(7)]);
var inst_35545 = inst_35500.length;
var inst_35546 = (inst_35545 > (0));
var state_35564__$1 = state_35564;
if(cljs.core.truth_(inst_35546)){
var statearr_35613_38612 = state_35564__$1;
(statearr_35613_38612[(1)] = (15));

} else {
var statearr_35614_38613 = state_35564__$1;
(statearr_35614_38613[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (17))){
var inst_35553 = (state_35564[(2)]);
var inst_35555 = cljs.core.async.close_BANG_(out);
var state_35564__$1 = (function (){var statearr_35618 = state_35564;
(statearr_35618[(10)] = inst_35553);

return statearr_35618;
})();
var statearr_35624_38614 = state_35564__$1;
(statearr_35624_38614[(2)] = inst_35555);

(statearr_35624_38614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (3))){
var inst_35559 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35564__$1,inst_35559);
} else {
if((state_val_35565 === (12))){
var inst_35500 = (state_35564[(7)]);
var inst_35533 = cljs.core.vec(inst_35500);
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35564__$1,(14),out,inst_35533);
} else {
if((state_val_35565 === (2))){
var state_35564__$1 = state_35564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35564__$1,(4),ch);
} else {
if((state_val_35565 === (11))){
var inst_35511 = (state_35564[(11)]);
var inst_35500 = (state_35564[(7)]);
var inst_35505 = (state_35564[(9)]);
var inst_35529 = inst_35500.push(inst_35505);
var tmp35661 = inst_35500;
var inst_35500__$1 = tmp35661;
var inst_35501 = inst_35511;
var state_35564__$1 = (function (){var statearr_35680 = state_35564;
(statearr_35680[(7)] = inst_35500__$1);

(statearr_35680[(12)] = inst_35529);

(statearr_35680[(8)] = inst_35501);

return statearr_35680;
})();
var statearr_35688_38616 = state_35564__$1;
(statearr_35688_38616[(2)] = null);

(statearr_35688_38616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (9))){
var inst_35501 = (state_35564[(8)]);
var inst_35521 = cljs.core.keyword_identical_QMARK_(inst_35501,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35564__$1 = state_35564;
var statearr_35697_38617 = state_35564__$1;
(statearr_35697_38617[(2)] = inst_35521);

(statearr_35697_38617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (5))){
var inst_35511 = (state_35564[(11)]);
var inst_35516 = (state_35564[(13)]);
var inst_35505 = (state_35564[(9)]);
var inst_35501 = (state_35564[(8)]);
var inst_35511__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35505) : f.call(null, inst_35505));
var inst_35516__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35511__$1,inst_35501);
var state_35564__$1 = (function (){var statearr_35712 = state_35564;
(statearr_35712[(11)] = inst_35511__$1);

(statearr_35712[(13)] = inst_35516__$1);

return statearr_35712;
})();
if(inst_35516__$1){
var statearr_35714_38618 = state_35564__$1;
(statearr_35714_38618[(1)] = (8));

} else {
var statearr_35718_38619 = state_35564__$1;
(statearr_35718_38619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (14))){
var inst_35511 = (state_35564[(11)]);
var inst_35505 = (state_35564[(9)]);
var inst_35535 = (state_35564[(2)]);
var inst_35536 = [];
var inst_35537 = inst_35536.push(inst_35505);
var inst_35500 = inst_35536;
var inst_35501 = inst_35511;
var state_35564__$1 = (function (){var statearr_35729 = state_35564;
(statearr_35729[(7)] = inst_35500);

(statearr_35729[(14)] = inst_35535);

(statearr_35729[(8)] = inst_35501);

(statearr_35729[(15)] = inst_35537);

return statearr_35729;
})();
var statearr_35732_38620 = state_35564__$1;
(statearr_35732_38620[(2)] = null);

(statearr_35732_38620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (16))){
var state_35564__$1 = state_35564;
var statearr_35738_38621 = state_35564__$1;
(statearr_35738_38621[(2)] = null);

(statearr_35738_38621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (10))){
var inst_35523 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
if(cljs.core.truth_(inst_35523)){
var statearr_35739_38623 = state_35564__$1;
(statearr_35739_38623[(1)] = (11));

} else {
var statearr_35741_38624 = state_35564__$1;
(statearr_35741_38624[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (18))){
var inst_35550 = (state_35564[(2)]);
var state_35564__$1 = state_35564;
var statearr_35747_38625 = state_35564__$1;
(statearr_35747_38625[(2)] = inst_35550);

(statearr_35747_38625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35565 === (8))){
var inst_35516 = (state_35564[(13)]);
var state_35564__$1 = state_35564;
var statearr_35750_38626 = state_35564__$1;
(statearr_35750_38626[(2)] = inst_35516);

(statearr_35750_38626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30499__auto__ = null;
var cljs$core$async$state_machine__30499__auto____0 = (function (){
var statearr_35757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35757[(0)] = cljs$core$async$state_machine__30499__auto__);

(statearr_35757[(1)] = (1));

return statearr_35757;
});
var cljs$core$async$state_machine__30499__auto____1 = (function (state_35564){
while(true){
var ret_value__30500__auto__ = (function (){try{while(true){
var result__30501__auto__ = switch__30498__auto__(state_35564);
if(cljs.core.keyword_identical_QMARK_(result__30501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30501__auto__;
}
break;
}
}catch (e35767){var ex__30502__auto__ = e35767;
var statearr_35774_38627 = state_35564;
(statearr_35774_38627[(2)] = ex__30502__auto__);


if(cljs.core.seq((state_35564[(4)]))){
var statearr_35787_38628 = state_35564;
(statearr_35787_38628[(1)] = cljs.core.first((state_35564[(4)])));

} else {
throw ex__30502__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38629 = state_35564;
state_35564 = G__38629;
continue;
} else {
return ret_value__30500__auto__;
}
break;
}
});
cljs$core$async$state_machine__30499__auto__ = function(state_35564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30499__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30499__auto____1.call(this,state_35564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30499__auto____0;
cljs$core$async$state_machine__30499__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30499__auto____1;
return cljs$core$async$state_machine__30499__auto__;
})()
})();
var state__31579__auto__ = (function (){var statearr_35812 = f__31578__auto__();
(statearr_35812[(6)] = c__31577__auto___38606);

return statearr_35812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31579__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
