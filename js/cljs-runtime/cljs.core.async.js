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
cljs.core.async.t_cljs$core$async32689 = (function (f,blockable,meta32690){
this.f = f;
this.blockable = blockable;
this.meta32690 = meta32690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32691,meta32690__$1){
var self__ = this;
var _32691__$1 = this;
return (new cljs.core.async.t_cljs$core$async32689(self__.f,self__.blockable,meta32690__$1));
}));

(cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32691){
var self__ = this;
var _32691__$1 = this;
return self__.meta32690;
}));

(cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32690","meta32690",1678851128,null)], null);
}));

(cljs.core.async.t_cljs$core$async32689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32689");

(cljs.core.async.t_cljs$core$async32689.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32689.
 */
cljs.core.async.__GT_t_cljs$core$async32689 = (function cljs$core$async$__GT_t_cljs$core$async32689(f,blockable,meta32690){
return (new cljs.core.async.t_cljs$core$async32689(f,blockable,meta32690));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32685 = arguments.length;
switch (G__32685) {
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
return (new cljs.core.async.t_cljs$core$async32689(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32757 = arguments.length;
switch (G__32757) {
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
var G__32783 = arguments.length;
switch (G__32783) {
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
var G__32795 = arguments.length;
switch (G__32795) {
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
var val_36046 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36046) : fn1.call(null, val_36046));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36046) : fn1.call(null, val_36046));
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
var G__32809 = arguments.length;
switch (G__32809) {
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
var n__5593__auto___36059 = n;
var x_36060 = (0);
while(true){
if((x_36060 < n__5593__auto___36059)){
(a[x_36060] = x_36060);

var G__36061 = (x_36060 + (1));
x_36060 = G__36061;
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
cljs.core.async.t_cljs$core$async32832 = (function (flag,meta32833){
this.flag = flag;
this.meta32833 = meta32833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32834,meta32833__$1){
var self__ = this;
var _32834__$1 = this;
return (new cljs.core.async.t_cljs$core$async32832(self__.flag,meta32833__$1));
}));

(cljs.core.async.t_cljs$core$async32832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32834){
var self__ = this;
var _32834__$1 = this;
return self__.meta32833;
}));

(cljs.core.async.t_cljs$core$async32832.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32833","meta32833",1378813343,null)], null);
}));

(cljs.core.async.t_cljs$core$async32832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32832");

(cljs.core.async.t_cljs$core$async32832.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32832.
 */
cljs.core.async.__GT_t_cljs$core$async32832 = (function cljs$core$async$__GT_t_cljs$core$async32832(flag,meta32833){
return (new cljs.core.async.t_cljs$core$async32832(flag,meta32833));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async32832(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32858 = (function (flag,cb,meta32859){
this.flag = flag;
this.cb = cb;
this.meta32859 = meta32859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32860,meta32859__$1){
var self__ = this;
var _32860__$1 = this;
return (new cljs.core.async.t_cljs$core$async32858(self__.flag,self__.cb,meta32859__$1));
}));

(cljs.core.async.t_cljs$core$async32858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32860){
var self__ = this;
var _32860__$1 = this;
return self__.meta32859;
}));

(cljs.core.async.t_cljs$core$async32858.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32858.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32859","meta32859",-534813370,null)], null);
}));

(cljs.core.async.t_cljs$core$async32858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32858");

(cljs.core.async.t_cljs$core$async32858.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32858.
 */
cljs.core.async.__GT_t_cljs$core$async32858 = (function cljs$core$async$__GT_t_cljs$core$async32858(flag,cb,meta32859){
return (new cljs.core.async.t_cljs$core$async32858(flag,cb,meta32859));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async32858(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32894_SHARP_){
var G__32913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32894_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32913) : fret.call(null, G__32913));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32895_SHARP_){
var G__32916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32895_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32916) : fret.call(null, G__32916));
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
var G__36081 = (i + (1));
i = G__36081;
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
var len__5726__auto___36085 = arguments.length;
var i__5727__auto___36086 = (0);
while(true){
if((i__5727__auto___36086 < len__5726__auto___36085)){
args__5732__auto__.push((arguments[i__5727__auto___36086]));

var G__36087 = (i__5727__auto___36086 + (1));
i__5727__auto___36086 = G__36087;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32973){
var map__32974 = p__32973;
var map__32974__$1 = cljs.core.__destructure_map(map__32974);
var opts = map__32974__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32945){
var G__32946 = cljs.core.first(seq32945);
var seq32945__$1 = cljs.core.next(seq32945);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32946,seq32945__$1);
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
var G__33002 = arguments.length;
switch (G__33002) {
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
var c__32561__auto___36097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33072){
var state_val_33073 = (state_33072[(1)]);
if((state_val_33073 === (7))){
var inst_33065 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33082_36098 = state_33072__$1;
(statearr_33082_36098[(2)] = inst_33065);

(statearr_33082_36098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (1))){
var state_33072__$1 = state_33072;
var statearr_33083_36100 = state_33072__$1;
(statearr_33083_36100[(2)] = null);

(statearr_33083_36100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (4))){
var inst_33042 = (state_33072[(7)]);
var inst_33042__$1 = (state_33072[(2)]);
var inst_33046 = (inst_33042__$1 == null);
var state_33072__$1 = (function (){var statearr_33087 = state_33072;
(statearr_33087[(7)] = inst_33042__$1);

return statearr_33087;
})();
if(cljs.core.truth_(inst_33046)){
var statearr_33089_36104 = state_33072__$1;
(statearr_33089_36104[(1)] = (5));

} else {
var statearr_33090_36105 = state_33072__$1;
(statearr_33090_36105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (13))){
var state_33072__$1 = state_33072;
var statearr_33094_36106 = state_33072__$1;
(statearr_33094_36106[(2)] = null);

(statearr_33094_36106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (6))){
var inst_33042 = (state_33072[(7)]);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33072__$1,(11),to,inst_33042);
} else {
if((state_val_33073 === (3))){
var inst_33067 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33072__$1,inst_33067);
} else {
if((state_val_33073 === (12))){
var state_33072__$1 = state_33072;
var statearr_33102_36110 = state_33072__$1;
(statearr_33102_36110[(2)] = null);

(statearr_33102_36110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (2))){
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33072__$1,(4),from);
} else {
if((state_val_33073 === (11))){
var inst_33057 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33057)){
var statearr_33103_36113 = state_33072__$1;
(statearr_33103_36113[(1)] = (12));

} else {
var statearr_33104_36114 = state_33072__$1;
(statearr_33104_36114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (9))){
var state_33072__$1 = state_33072;
var statearr_33106_36115 = state_33072__$1;
(statearr_33106_36115[(2)] = null);

(statearr_33106_36115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (5))){
var state_33072__$1 = state_33072;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33115_36116 = state_33072__$1;
(statearr_33115_36116[(1)] = (8));

} else {
var statearr_33116_36117 = state_33072__$1;
(statearr_33116_36117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (14))){
var inst_33063 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33120_36118 = state_33072__$1;
(statearr_33120_36118[(2)] = inst_33063);

(statearr_33120_36118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (10))){
var inst_33054 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33125_36121 = state_33072__$1;
(statearr_33125_36121[(2)] = inst_33054);

(statearr_33125_36121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (8))){
var inst_33051 = cljs.core.async.close_BANG_(to);
var state_33072__$1 = state_33072;
var statearr_33126_36122 = state_33072__$1;
(statearr_33126_36122[(2)] = inst_33051);

(statearr_33126_36122[(1)] = (10));


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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_33128 = [null,null,null,null,null,null,null,null];
(statearr_33128[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_33128[(1)] = (1));

return statearr_33128;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_33072){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33072);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33129){var ex__31765__auto__ = e33129;
var statearr_33130_36124 = state_33072;
(statearr_33130_36124[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33072[(4)]))){
var statearr_33131_36125 = state_33072;
(statearr_33131_36125[(1)] = cljs.core.first((state_33072[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36128 = state_33072;
state_33072 = G__36128;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_33072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_33072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33136 = f__32563__auto__();
(statearr_33136[(6)] = c__32561__auto___36097);

return statearr_33136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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
var process__$1 = (function (p__33140){
var vec__33142 = p__33140;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33142,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33142,(1),null);
var job = vec__33142;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32561__auto___36135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33149){
var state_val_33150 = (state_33149[(1)]);
if((state_val_33150 === (1))){
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33149__$1,(2),res,v);
} else {
if((state_val_33150 === (2))){
var inst_33146 = (state_33149[(2)]);
var inst_33147 = cljs.core.async.close_BANG_(res);
var state_33149__$1 = (function (){var statearr_33152 = state_33149;
(statearr_33152[(7)] = inst_33146);

return statearr_33152;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33149__$1,inst_33147);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1 = (function (state_33149){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33149);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33161){var ex__31765__auto__ = e33161;
var statearr_33162_36143 = state_33149;
(statearr_33162_36143[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33149[(4)]))){
var statearr_33163_36144 = state_33149;
(statearr_33163_36144[(1)] = cljs.core.first((state_33149[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36149 = state_33149;
state_33149 = G__36149;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = function(state_33149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1.call(this,state_33149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33165 = f__32563__auto__();
(statearr_33165[(6)] = c__32561__auto___36135);

return statearr_33165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33166){
var vec__33167 = p__33166;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33167,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33167,(1),null);
var job = vec__33167;
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
var n__5593__auto___36150 = n;
var __36151 = (0);
while(true){
if((__36151 < n__5593__auto___36150)){
var G__33174_36152 = type;
var G__33174_36153__$1 = (((G__33174_36152 instanceof cljs.core.Keyword))?G__33174_36152.fqn:null);
switch (G__33174_36153__$1) {
case "compute":
var c__32561__auto___36155 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36151,c__32561__auto___36155,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async){
return (function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = ((function (__36151,c__32561__auto___36155,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async){
return (function (state_33189){
var state_val_33190 = (state_33189[(1)]);
if((state_val_33190 === (1))){
var state_33189__$1 = state_33189;
var statearr_33194_36160 = state_33189__$1;
(statearr_33194_36160[(2)] = null);

(statearr_33194_36160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (2))){
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33189__$1,(4),jobs);
} else {
if((state_val_33190 === (3))){
var inst_33187 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33189__$1,inst_33187);
} else {
if((state_val_33190 === (4))){
var inst_33178 = (state_33189[(2)]);
var inst_33179 = process__$1(inst_33178);
var state_33189__$1 = state_33189;
if(cljs.core.truth_(inst_33179)){
var statearr_33202_36166 = state_33189__$1;
(statearr_33202_36166[(1)] = (5));

} else {
var statearr_33206_36167 = state_33189__$1;
(statearr_33206_36167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (5))){
var state_33189__$1 = state_33189;
var statearr_33210_36168 = state_33189__$1;
(statearr_33210_36168[(2)] = null);

(statearr_33210_36168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (6))){
var state_33189__$1 = state_33189;
var statearr_33215_36169 = state_33189__$1;
(statearr_33215_36169[(2)] = null);

(statearr_33215_36169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33190 === (7))){
var inst_33185 = (state_33189[(2)]);
var state_33189__$1 = state_33189;
var statearr_33218_36170 = state_33189__$1;
(statearr_33218_36170[(2)] = inst_33185);

(statearr_33218_36170[(1)] = (3));


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
});})(__36151,c__32561__auto___36155,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async))
;
return ((function (__36151,switch__31761__auto__,c__32561__auto___36155,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0 = (function (){
var statearr_33219 = [null,null,null,null,null,null,null];
(statearr_33219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__);

(statearr_33219[(1)] = (1));

return statearr_33219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1 = (function (state_33189){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33189);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33220){var ex__31765__auto__ = e33220;
var statearr_33222_36177 = state_33189;
(statearr_33222_36177[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33189[(4)]))){
var statearr_33223_36178 = state_33189;
(statearr_33223_36178[(1)] = cljs.core.first((state_33189[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36183 = state_33189;
state_33189 = G__36183;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = function(state_33189){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1.call(this,state_33189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__;
})()
;})(__36151,switch__31761__auto__,c__32561__auto___36155,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async))
})();
var state__32564__auto__ = (function (){var statearr_33224 = f__32563__auto__();
(statearr_33224[(6)] = c__32561__auto___36155);

return statearr_33224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
});})(__36151,c__32561__auto___36155,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async))
);


break;
case "async":
var c__32561__auto___36184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36151,c__32561__auto___36184,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async){
return (function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = ((function (__36151,c__32561__auto___36184,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async){
return (function (state_33241){
var state_val_33242 = (state_33241[(1)]);
if((state_val_33242 === (1))){
var state_33241__$1 = state_33241;
var statearr_33245_36185 = state_33241__$1;
(statearr_33245_36185[(2)] = null);

(statearr_33245_36185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (2))){
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33241__$1,(4),jobs);
} else {
if((state_val_33242 === (3))){
var inst_33238 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33241__$1,inst_33238);
} else {
if((state_val_33242 === (4))){
var inst_33228 = (state_33241[(2)]);
var inst_33230 = async(inst_33228);
var state_33241__$1 = state_33241;
if(cljs.core.truth_(inst_33230)){
var statearr_33249_36186 = state_33241__$1;
(statearr_33249_36186[(1)] = (5));

} else {
var statearr_33250_36187 = state_33241__$1;
(statearr_33250_36187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (5))){
var state_33241__$1 = state_33241;
var statearr_33251_36191 = state_33241__$1;
(statearr_33251_36191[(2)] = null);

(statearr_33251_36191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (6))){
var state_33241__$1 = state_33241;
var statearr_33254_36192 = state_33241__$1;
(statearr_33254_36192[(2)] = null);

(statearr_33254_36192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (7))){
var inst_33236 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
var statearr_33258_36193 = state_33241__$1;
(statearr_33258_36193[(2)] = inst_33236);

(statearr_33258_36193[(1)] = (3));


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
});})(__36151,c__32561__auto___36184,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async))
;
return ((function (__36151,switch__31761__auto__,c__32561__auto___36184,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0 = (function (){
var statearr_33261 = [null,null,null,null,null,null,null];
(statearr_33261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__);

(statearr_33261[(1)] = (1));

return statearr_33261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1 = (function (state_33241){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33241);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33262){var ex__31765__auto__ = e33262;
var statearr_33263_36194 = state_33241;
(statearr_33263_36194[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33241[(4)]))){
var statearr_33264_36195 = state_33241;
(statearr_33264_36195[(1)] = cljs.core.first((state_33241[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36196 = state_33241;
state_33241 = G__36196;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = function(state_33241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1.call(this,state_33241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__;
})()
;})(__36151,switch__31761__auto__,c__32561__auto___36184,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async))
})();
var state__32564__auto__ = (function (){var statearr_33269 = f__32563__auto__();
(statearr_33269[(6)] = c__32561__auto___36184);

return statearr_33269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
});})(__36151,c__32561__auto___36184,G__33174_36152,G__33174_36153__$1,n__5593__auto___36150,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33174_36153__$1)].join('')));

}

var G__36197 = (__36151 + (1));
__36151 = G__36197;
continue;
} else {
}
break;
}

var c__32561__auto___36199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33300){
var state_val_33301 = (state_33300[(1)]);
if((state_val_33301 === (7))){
var inst_33294 = (state_33300[(2)]);
var state_33300__$1 = state_33300;
var statearr_33316_36202 = state_33300__$1;
(statearr_33316_36202[(2)] = inst_33294);

(statearr_33316_36202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (1))){
var state_33300__$1 = state_33300;
var statearr_33318_36203 = state_33300__$1;
(statearr_33318_36203[(2)] = null);

(statearr_33318_36203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (4))){
var inst_33277 = (state_33300[(7)]);
var inst_33277__$1 = (state_33300[(2)]);
var inst_33278 = (inst_33277__$1 == null);
var state_33300__$1 = (function (){var statearr_33324 = state_33300;
(statearr_33324[(7)] = inst_33277__$1);

return statearr_33324;
})();
if(cljs.core.truth_(inst_33278)){
var statearr_33328_36204 = state_33300__$1;
(statearr_33328_36204[(1)] = (5));

} else {
var statearr_33329_36205 = state_33300__$1;
(statearr_33329_36205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (6))){
var inst_33282 = (state_33300[(8)]);
var inst_33277 = (state_33300[(7)]);
var inst_33282__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33285 = [inst_33277,inst_33282__$1];
var inst_33286 = (new cljs.core.PersistentVector(null,2,(5),inst_33284,inst_33285,null));
var state_33300__$1 = (function (){var statearr_33335 = state_33300;
(statearr_33335[(8)] = inst_33282__$1);

return statearr_33335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33300__$1,(8),jobs,inst_33286);
} else {
if((state_val_33301 === (3))){
var inst_33296 = (state_33300[(2)]);
var state_33300__$1 = state_33300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33300__$1,inst_33296);
} else {
if((state_val_33301 === (2))){
var state_33300__$1 = state_33300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33300__$1,(4),from);
} else {
if((state_val_33301 === (9))){
var inst_33291 = (state_33300[(2)]);
var state_33300__$1 = (function (){var statearr_33366 = state_33300;
(statearr_33366[(9)] = inst_33291);

return statearr_33366;
})();
var statearr_33373_36210 = state_33300__$1;
(statearr_33373_36210[(2)] = null);

(statearr_33373_36210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (5))){
var inst_33280 = cljs.core.async.close_BANG_(jobs);
var state_33300__$1 = state_33300;
var statearr_33390_36211 = state_33300__$1;
(statearr_33390_36211[(2)] = inst_33280);

(statearr_33390_36211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33301 === (8))){
var inst_33282 = (state_33300[(8)]);
var inst_33288 = (state_33300[(2)]);
var state_33300__$1 = (function (){var statearr_33391 = state_33300;
(statearr_33391[(10)] = inst_33288);

return statearr_33391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33300__$1,(9),results,inst_33282);
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
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0 = (function (){
var statearr_33397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__);

(statearr_33397[(1)] = (1));

return statearr_33397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1 = (function (state_33300){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33300);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33401){var ex__31765__auto__ = e33401;
var statearr_33403_36212 = state_33300;
(statearr_33403_36212[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33300[(4)]))){
var statearr_33404_36213 = state_33300;
(statearr_33404_36213[(1)] = cljs.core.first((state_33300[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36214 = state_33300;
state_33300 = G__36214;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = function(state_33300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1.call(this,state_33300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33411 = f__32563__auto__();
(statearr_33411[(6)] = c__32561__auto___36199);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));


var c__32561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33453){
var state_val_33454 = (state_33453[(1)]);
if((state_val_33454 === (7))){
var inst_33448 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33463_36215 = state_33453__$1;
(statearr_33463_36215[(2)] = inst_33448);

(statearr_33463_36215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (20))){
var state_33453__$1 = state_33453;
var statearr_33464_36216 = state_33453__$1;
(statearr_33464_36216[(2)] = null);

(statearr_33464_36216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (1))){
var state_33453__$1 = state_33453;
var statearr_33467_36220 = state_33453__$1;
(statearr_33467_36220[(2)] = null);

(statearr_33467_36220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (4))){
var inst_33414 = (state_33453[(7)]);
var inst_33414__$1 = (state_33453[(2)]);
var inst_33415 = (inst_33414__$1 == null);
var state_33453__$1 = (function (){var statearr_33468 = state_33453;
(statearr_33468[(7)] = inst_33414__$1);

return statearr_33468;
})();
if(cljs.core.truth_(inst_33415)){
var statearr_33469_36221 = state_33453__$1;
(statearr_33469_36221[(1)] = (5));

} else {
var statearr_33470_36222 = state_33453__$1;
(statearr_33470_36222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (15))){
var inst_33428 = (state_33453[(8)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33453__$1,(18),to,inst_33428);
} else {
if((state_val_33454 === (21))){
var inst_33442 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33479_36223 = state_33453__$1;
(statearr_33479_36223[(2)] = inst_33442);

(statearr_33479_36223[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (13))){
var inst_33444 = (state_33453[(2)]);
var state_33453__$1 = (function (){var statearr_33486 = state_33453;
(statearr_33486[(9)] = inst_33444);

return statearr_33486;
})();
var statearr_33488_36228 = state_33453__$1;
(statearr_33488_36228[(2)] = null);

(statearr_33488_36228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (6))){
var inst_33414 = (state_33453[(7)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33453__$1,(11),inst_33414);
} else {
if((state_val_33454 === (17))){
var inst_33437 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
if(cljs.core.truth_(inst_33437)){
var statearr_33498_36232 = state_33453__$1;
(statearr_33498_36232[(1)] = (19));

} else {
var statearr_33500_36233 = state_33453__$1;
(statearr_33500_36233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (3))){
var inst_33450 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33453__$1,inst_33450);
} else {
if((state_val_33454 === (12))){
var inst_33424 = (state_33453[(10)]);
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33453__$1,(14),inst_33424);
} else {
if((state_val_33454 === (2))){
var state_33453__$1 = state_33453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33453__$1,(4),results);
} else {
if((state_val_33454 === (19))){
var state_33453__$1 = state_33453;
var statearr_33523_36237 = state_33453__$1;
(statearr_33523_36237[(2)] = null);

(statearr_33523_36237[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (11))){
var inst_33424 = (state_33453[(2)]);
var state_33453__$1 = (function (){var statearr_33524 = state_33453;
(statearr_33524[(10)] = inst_33424);

return statearr_33524;
})();
var statearr_33525_36239 = state_33453__$1;
(statearr_33525_36239[(2)] = null);

(statearr_33525_36239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (9))){
var state_33453__$1 = state_33453;
var statearr_33528_36240 = state_33453__$1;
(statearr_33528_36240[(2)] = null);

(statearr_33528_36240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (5))){
var state_33453__$1 = state_33453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33530_36241 = state_33453__$1;
(statearr_33530_36241[(1)] = (8));

} else {
var statearr_33531_36242 = state_33453__$1;
(statearr_33531_36242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (14))){
var inst_33428 = (state_33453[(8)]);
var inst_33431 = (state_33453[(11)]);
var inst_33428__$1 = (state_33453[(2)]);
var inst_33430 = (inst_33428__$1 == null);
var inst_33431__$1 = cljs.core.not(inst_33430);
var state_33453__$1 = (function (){var statearr_33535 = state_33453;
(statearr_33535[(8)] = inst_33428__$1);

(statearr_33535[(11)] = inst_33431__$1);

return statearr_33535;
})();
if(inst_33431__$1){
var statearr_33537_36244 = state_33453__$1;
(statearr_33537_36244[(1)] = (15));

} else {
var statearr_33538_36245 = state_33453__$1;
(statearr_33538_36245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (16))){
var inst_33431 = (state_33453[(11)]);
var state_33453__$1 = state_33453;
var statearr_33539_36246 = state_33453__$1;
(statearr_33539_36246[(2)] = inst_33431);

(statearr_33539_36246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (10))){
var inst_33421 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33540_36248 = state_33453__$1;
(statearr_33540_36248[(2)] = inst_33421);

(statearr_33540_36248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (18))){
var inst_33434 = (state_33453[(2)]);
var state_33453__$1 = state_33453;
var statearr_33542_36250 = state_33453__$1;
(statearr_33542_36250[(2)] = inst_33434);

(statearr_33542_36250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33454 === (8))){
var inst_33418 = cljs.core.async.close_BANG_(to);
var state_33453__$1 = state_33453;
var statearr_33543_36251 = state_33453__$1;
(statearr_33543_36251[(2)] = inst_33418);

(statearr_33543_36251[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0 = (function (){
var statearr_33546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__);

(statearr_33546[(1)] = (1));

return statearr_33546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1 = (function (state_33453){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33453);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33550){var ex__31765__auto__ = e33550;
var statearr_33552_36252 = state_33453;
(statearr_33552_36252[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33453[(4)]))){
var statearr_33553_36253 = state_33453;
(statearr_33553_36253[(1)] = cljs.core.first((state_33453[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36254 = state_33453;
state_33453 = G__36254;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__ = function(state_33453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1.call(this,state_33453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33555 = f__32563__auto__();
(statearr_33555[(6)] = c__32561__auto__);

return statearr_33555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));

return c__32561__auto__;
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
var G__33562 = arguments.length;
switch (G__33562) {
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
var G__33572 = arguments.length;
switch (G__33572) {
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
var G__33583 = arguments.length;
switch (G__33583) {
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
var c__32561__auto___36266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33628){
var state_val_33629 = (state_33628[(1)]);
if((state_val_33629 === (7))){
var inst_33623 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33640_36267 = state_33628__$1;
(statearr_33640_36267[(2)] = inst_33623);

(statearr_33640_36267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (1))){
var state_33628__$1 = state_33628;
var statearr_33641_36268 = state_33628__$1;
(statearr_33641_36268[(2)] = null);

(statearr_33641_36268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (4))){
var inst_33602 = (state_33628[(7)]);
var inst_33602__$1 = (state_33628[(2)]);
var inst_33603 = (inst_33602__$1 == null);
var state_33628__$1 = (function (){var statearr_33647 = state_33628;
(statearr_33647[(7)] = inst_33602__$1);

return statearr_33647;
})();
if(cljs.core.truth_(inst_33603)){
var statearr_33648_36269 = state_33628__$1;
(statearr_33648_36269[(1)] = (5));

} else {
var statearr_33650_36271 = state_33628__$1;
(statearr_33650_36271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (13))){
var state_33628__$1 = state_33628;
var statearr_33656_36272 = state_33628__$1;
(statearr_33656_36272[(2)] = null);

(statearr_33656_36272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (6))){
var inst_33602 = (state_33628[(7)]);
var inst_33609 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33602) : p.call(null, inst_33602));
var state_33628__$1 = state_33628;
if(cljs.core.truth_(inst_33609)){
var statearr_33657_36273 = state_33628__$1;
(statearr_33657_36273[(1)] = (9));

} else {
var statearr_33658_36274 = state_33628__$1;
(statearr_33658_36274[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (3))){
var inst_33625 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33628__$1,inst_33625);
} else {
if((state_val_33629 === (12))){
var state_33628__$1 = state_33628;
var statearr_33659_36276 = state_33628__$1;
(statearr_33659_36276[(2)] = null);

(statearr_33659_36276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (2))){
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33628__$1,(4),ch);
} else {
if((state_val_33629 === (11))){
var inst_33602 = (state_33628[(7)]);
var inst_33613 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33628__$1,(8),inst_33613,inst_33602);
} else {
if((state_val_33629 === (9))){
var state_33628__$1 = state_33628;
var statearr_33674_36278 = state_33628__$1;
(statearr_33674_36278[(2)] = tc);

(statearr_33674_36278[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (5))){
var inst_33605 = cljs.core.async.close_BANG_(tc);
var inst_33606 = cljs.core.async.close_BANG_(fc);
var state_33628__$1 = (function (){var statearr_33681 = state_33628;
(statearr_33681[(8)] = inst_33605);

return statearr_33681;
})();
var statearr_33683_36282 = state_33628__$1;
(statearr_33683_36282[(2)] = inst_33606);

(statearr_33683_36282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (14))){
var inst_33621 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
var statearr_33689_36284 = state_33628__$1;
(statearr_33689_36284[(2)] = inst_33621);

(statearr_33689_36284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (10))){
var state_33628__$1 = state_33628;
var statearr_33701_36285 = state_33628__$1;
(statearr_33701_36285[(2)] = fc);

(statearr_33701_36285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33629 === (8))){
var inst_33616 = (state_33628[(2)]);
var state_33628__$1 = state_33628;
if(cljs.core.truth_(inst_33616)){
var statearr_33702_36286 = state_33628__$1;
(statearr_33702_36286[(1)] = (12));

} else {
var statearr_33705_36287 = state_33628__$1;
(statearr_33705_36287[(1)] = (13));

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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_33708 = [null,null,null,null,null,null,null,null,null];
(statearr_33708[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_33708[(1)] = (1));

return statearr_33708;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_33628){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33628);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33709){var ex__31765__auto__ = e33709;
var statearr_33711_36288 = state_33628;
(statearr_33711_36288[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33628[(4)]))){
var statearr_33712_36289 = state_33628;
(statearr_33712_36289[(1)] = cljs.core.first((state_33628[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36290 = state_33628;
state_33628 = G__36290;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_33628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_33628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33717 = f__32563__auto__();
(statearr_33717[(6)] = c__32561__auto___36266);

return statearr_33717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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
var c__32561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33761){
var state_val_33762 = (state_33761[(1)]);
if((state_val_33762 === (7))){
var inst_33756 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33767_36291 = state_33761__$1;
(statearr_33767_36291[(2)] = inst_33756);

(statearr_33767_36291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (1))){
var inst_33739 = init;
var inst_33740 = inst_33739;
var state_33761__$1 = (function (){var statearr_33768 = state_33761;
(statearr_33768[(7)] = inst_33740);

return statearr_33768;
})();
var statearr_33769_36292 = state_33761__$1;
(statearr_33769_36292[(2)] = null);

(statearr_33769_36292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (4))){
var inst_33743 = (state_33761[(8)]);
var inst_33743__$1 = (state_33761[(2)]);
var inst_33744 = (inst_33743__$1 == null);
var state_33761__$1 = (function (){var statearr_33770 = state_33761;
(statearr_33770[(8)] = inst_33743__$1);

return statearr_33770;
})();
if(cljs.core.truth_(inst_33744)){
var statearr_33771_36293 = state_33761__$1;
(statearr_33771_36293[(1)] = (5));

} else {
var statearr_33772_36294 = state_33761__$1;
(statearr_33772_36294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (6))){
var inst_33743 = (state_33761[(8)]);
var inst_33740 = (state_33761[(7)]);
var inst_33747 = (state_33761[(9)]);
var inst_33747__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33740,inst_33743) : f.call(null, inst_33740,inst_33743));
var inst_33748 = cljs.core.reduced_QMARK_(inst_33747__$1);
var state_33761__$1 = (function (){var statearr_33773 = state_33761;
(statearr_33773[(9)] = inst_33747__$1);

return statearr_33773;
})();
if(inst_33748){
var statearr_33774_36295 = state_33761__$1;
(statearr_33774_36295[(1)] = (8));

} else {
var statearr_33775_36296 = state_33761__$1;
(statearr_33775_36296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (3))){
var inst_33758 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33761__$1,inst_33758);
} else {
if((state_val_33762 === (2))){
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33761__$1,(4),ch);
} else {
if((state_val_33762 === (9))){
var inst_33747 = (state_33761[(9)]);
var inst_33740 = inst_33747;
var state_33761__$1 = (function (){var statearr_33776 = state_33761;
(statearr_33776[(7)] = inst_33740);

return statearr_33776;
})();
var statearr_33777_36297 = state_33761__$1;
(statearr_33777_36297[(2)] = null);

(statearr_33777_36297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (5))){
var inst_33740 = (state_33761[(7)]);
var state_33761__$1 = state_33761;
var statearr_33779_36300 = state_33761__$1;
(statearr_33779_36300[(2)] = inst_33740);

(statearr_33779_36300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (10))){
var inst_33754 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33780_36301 = state_33761__$1;
(statearr_33780_36301[(2)] = inst_33754);

(statearr_33780_36301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (8))){
var inst_33747 = (state_33761[(9)]);
var inst_33750 = cljs.core.deref(inst_33747);
var state_33761__$1 = state_33761;
var statearr_33781_36302 = state_33761__$1;
(statearr_33781_36302[(2)] = inst_33750);

(statearr_33781_36302[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__31762__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31762__auto____0 = (function (){
var statearr_33785 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33785[(0)] = cljs$core$async$reduce_$_state_machine__31762__auto__);

(statearr_33785[(1)] = (1));

return statearr_33785;
});
var cljs$core$async$reduce_$_state_machine__31762__auto____1 = (function (state_33761){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33761);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33786){var ex__31765__auto__ = e33786;
var statearr_33787_36305 = state_33761;
(statearr_33787_36305[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33761[(4)]))){
var statearr_33788_36306 = state_33761;
(statearr_33788_36306[(1)] = cljs.core.first((state_33761[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36308 = state_33761;
state_33761 = G__36308;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31762__auto__ = function(state_33761){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31762__auto____1.call(this,state_33761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31762__auto____0;
cljs$core$async$reduce_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31762__auto____1;
return cljs$core$async$reduce_$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33789 = f__32563__auto__();
(statearr_33789[(6)] = c__32561__auto__);

return statearr_33789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));

return c__32561__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__32561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33796){
var state_val_33797 = (state_33796[(1)]);
if((state_val_33797 === (1))){
var inst_33791 = cljs.core.async.reduce(f__$1,init,ch);
var state_33796__$1 = state_33796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33796__$1,(2),inst_33791);
} else {
if((state_val_33797 === (2))){
var inst_33793 = (state_33796[(2)]);
var inst_33794 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33793) : f__$1.call(null, inst_33793));
var state_33796__$1 = state_33796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33796__$1,inst_33794);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31762__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31762__auto____0 = (function (){
var statearr_33800 = [null,null,null,null,null,null,null];
(statearr_33800[(0)] = cljs$core$async$transduce_$_state_machine__31762__auto__);

(statearr_33800[(1)] = (1));

return statearr_33800;
});
var cljs$core$async$transduce_$_state_machine__31762__auto____1 = (function (state_33796){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33796);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33802){var ex__31765__auto__ = e33802;
var statearr_33803_36315 = state_33796;
(statearr_33803_36315[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33796[(4)]))){
var statearr_33804_36316 = state_33796;
(statearr_33804_36316[(1)] = cljs.core.first((state_33796[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36317 = state_33796;
state_33796 = G__36317;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31762__auto__ = function(state_33796){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31762__auto____1.call(this,state_33796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31762__auto____0;
cljs$core$async$transduce_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31762__auto____1;
return cljs$core$async$transduce_$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33809 = f__32563__auto__();
(statearr_33809[(6)] = c__32561__auto__);

return statearr_33809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));

return c__32561__auto__;
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
var G__33817 = arguments.length;
switch (G__33817) {
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
var c__32561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_33849){
var state_val_33850 = (state_33849[(1)]);
if((state_val_33850 === (7))){
var inst_33830 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
var statearr_33852_36321 = state_33849__$1;
(statearr_33852_36321[(2)] = inst_33830);

(statearr_33852_36321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (1))){
var inst_33823 = cljs.core.seq(coll);
var inst_33824 = inst_33823;
var state_33849__$1 = (function (){var statearr_33853 = state_33849;
(statearr_33853[(7)] = inst_33824);

return statearr_33853;
})();
var statearr_33854_36322 = state_33849__$1;
(statearr_33854_36322[(2)] = null);

(statearr_33854_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (4))){
var inst_33824 = (state_33849[(7)]);
var inst_33828 = cljs.core.first(inst_33824);
var state_33849__$1 = state_33849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33849__$1,(7),ch,inst_33828);
} else {
if((state_val_33850 === (13))){
var inst_33842 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
var statearr_33857_36323 = state_33849__$1;
(statearr_33857_36323[(2)] = inst_33842);

(statearr_33857_36323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (6))){
var inst_33833 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
if(cljs.core.truth_(inst_33833)){
var statearr_33858_36324 = state_33849__$1;
(statearr_33858_36324[(1)] = (8));

} else {
var statearr_33860_36325 = state_33849__$1;
(statearr_33860_36325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (3))){
var inst_33846 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33849__$1,inst_33846);
} else {
if((state_val_33850 === (12))){
var state_33849__$1 = state_33849;
var statearr_33865_36326 = state_33849__$1;
(statearr_33865_36326[(2)] = null);

(statearr_33865_36326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (2))){
var inst_33824 = (state_33849[(7)]);
var state_33849__$1 = state_33849;
if(cljs.core.truth_(inst_33824)){
var statearr_33866_36327 = state_33849__$1;
(statearr_33866_36327[(1)] = (4));

} else {
var statearr_33867_36328 = state_33849__$1;
(statearr_33867_36328[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (11))){
var inst_33839 = cljs.core.async.close_BANG_(ch);
var state_33849__$1 = state_33849;
var statearr_33868_36330 = state_33849__$1;
(statearr_33868_36330[(2)] = inst_33839);

(statearr_33868_36330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (9))){
var state_33849__$1 = state_33849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33869_36332 = state_33849__$1;
(statearr_33869_36332[(1)] = (11));

} else {
var statearr_33870_36334 = state_33849__$1;
(statearr_33870_36334[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (5))){
var inst_33824 = (state_33849[(7)]);
var state_33849__$1 = state_33849;
var statearr_33872_36335 = state_33849__$1;
(statearr_33872_36335[(2)] = inst_33824);

(statearr_33872_36335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (10))){
var inst_33844 = (state_33849[(2)]);
var state_33849__$1 = state_33849;
var statearr_33873_36336 = state_33849__$1;
(statearr_33873_36336[(2)] = inst_33844);

(statearr_33873_36336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33850 === (8))){
var inst_33824 = (state_33849[(7)]);
var inst_33835 = cljs.core.next(inst_33824);
var inst_33824__$1 = inst_33835;
var state_33849__$1 = (function (){var statearr_33874 = state_33849;
(statearr_33874[(7)] = inst_33824__$1);

return statearr_33874;
})();
var statearr_33875_36339 = state_33849__$1;
(statearr_33875_36339[(2)] = null);

(statearr_33875_36339[(1)] = (2));


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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_33876 = [null,null,null,null,null,null,null,null];
(statearr_33876[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_33876[(1)] = (1));

return statearr_33876;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_33849){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_33849);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e33879){var ex__31765__auto__ = e33879;
var statearr_33880_36342 = state_33849;
(statearr_33880_36342[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_33849[(4)]))){
var statearr_33882_36347 = state_33849;
(statearr_33882_36347[(1)] = cljs.core.first((state_33849[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36348 = state_33849;
state_33849 = G__36348;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_33849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_33849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_33887 = f__32563__auto__();
(statearr_33887[(6)] = c__32561__auto__);

return statearr_33887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));

return c__32561__auto__;
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
var G__33896 = arguments.length;
switch (G__33896) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_36358 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_36358(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36364 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_36364(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36369 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_36369(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36377 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_36377(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33915 = (function (ch,cs,meta33916){
this.ch = ch;
this.cs = cs;
this.meta33916 = meta33916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33917,meta33916__$1){
var self__ = this;
var _33917__$1 = this;
return (new cljs.core.async.t_cljs$core$async33915(self__.ch,self__.cs,meta33916__$1));
}));

(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33917){
var self__ = this;
var _33917__$1 = this;
return self__.meta33916;
}));

(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33915.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33916","meta33916",-275584721,null)], null);
}));

(cljs.core.async.t_cljs$core$async33915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33915");

(cljs.core.async.t_cljs$core$async33915.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33915.
 */
cljs.core.async.__GT_t_cljs$core$async33915 = (function cljs$core$async$__GT_t_cljs$core$async33915(ch,cs,meta33916){
return (new cljs.core.async.t_cljs$core$async33915(ch,cs,meta33916));
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
var m = (new cljs.core.async.t_cljs$core$async33915(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32561__auto___36386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_34060){
var state_val_34061 = (state_34060[(1)]);
if((state_val_34061 === (7))){
var inst_34052 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34066_36388 = state_34060__$1;
(statearr_34066_36388[(2)] = inst_34052);

(statearr_34066_36388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (20))){
var inst_33954 = (state_34060[(7)]);
var inst_33967 = cljs.core.first(inst_33954);
var inst_33968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33967,(0),null);
var inst_33969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33967,(1),null);
var state_34060__$1 = (function (){var statearr_34077 = state_34060;
(statearr_34077[(8)] = inst_33968);

return statearr_34077;
})();
if(cljs.core.truth_(inst_33969)){
var statearr_34080_36389 = state_34060__$1;
(statearr_34080_36389[(1)] = (22));

} else {
var statearr_34081_36391 = state_34060__$1;
(statearr_34081_36391[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (27))){
var inst_34004 = (state_34060[(9)]);
var inst_33999 = (state_34060[(10)]);
var inst_33923 = (state_34060[(11)]);
var inst_33997 = (state_34060[(12)]);
var inst_34004__$1 = cljs.core._nth(inst_33997,inst_33999);
var inst_34005 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34004__$1,inst_33923,done);
var state_34060__$1 = (function (){var statearr_34087 = state_34060;
(statearr_34087[(9)] = inst_34004__$1);

return statearr_34087;
})();
if(cljs.core.truth_(inst_34005)){
var statearr_34088_36392 = state_34060__$1;
(statearr_34088_36392[(1)] = (30));

} else {
var statearr_34089_36393 = state_34060__$1;
(statearr_34089_36393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (1))){
var state_34060__$1 = state_34060;
var statearr_34090_36394 = state_34060__$1;
(statearr_34090_36394[(2)] = null);

(statearr_34090_36394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (24))){
var inst_33954 = (state_34060[(7)]);
var inst_33974 = (state_34060[(2)]);
var inst_33975 = cljs.core.next(inst_33954);
var inst_33932 = inst_33975;
var inst_33933 = null;
var inst_33934 = (0);
var inst_33935 = (0);
var state_34060__$1 = (function (){var statearr_34091 = state_34060;
(statearr_34091[(13)] = inst_33974);

(statearr_34091[(14)] = inst_33932);

(statearr_34091[(15)] = inst_33934);

(statearr_34091[(16)] = inst_33935);

(statearr_34091[(17)] = inst_33933);

return statearr_34091;
})();
var statearr_34094_36398 = state_34060__$1;
(statearr_34094_36398[(2)] = null);

(statearr_34094_36398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (39))){
var state_34060__$1 = state_34060;
var statearr_34098_36399 = state_34060__$1;
(statearr_34098_36399[(2)] = null);

(statearr_34098_36399[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (4))){
var inst_33923 = (state_34060[(11)]);
var inst_33923__$1 = (state_34060[(2)]);
var inst_33924 = (inst_33923__$1 == null);
var state_34060__$1 = (function (){var statearr_34099 = state_34060;
(statearr_34099[(11)] = inst_33923__$1);

return statearr_34099;
})();
if(cljs.core.truth_(inst_33924)){
var statearr_34100_36401 = state_34060__$1;
(statearr_34100_36401[(1)] = (5));

} else {
var statearr_34102_36402 = state_34060__$1;
(statearr_34102_36402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (15))){
var inst_33932 = (state_34060[(14)]);
var inst_33934 = (state_34060[(15)]);
var inst_33935 = (state_34060[(16)]);
var inst_33933 = (state_34060[(17)]);
var inst_33950 = (state_34060[(2)]);
var inst_33951 = (inst_33935 + (1));
var tmp34095 = inst_33932;
var tmp34096 = inst_33934;
var tmp34097 = inst_33933;
var inst_33932__$1 = tmp34095;
var inst_33933__$1 = tmp34097;
var inst_33934__$1 = tmp34096;
var inst_33935__$1 = inst_33951;
var state_34060__$1 = (function (){var statearr_34104 = state_34060;
(statearr_34104[(18)] = inst_33950);

(statearr_34104[(14)] = inst_33932__$1);

(statearr_34104[(15)] = inst_33934__$1);

(statearr_34104[(16)] = inst_33935__$1);

(statearr_34104[(17)] = inst_33933__$1);

return statearr_34104;
})();
var statearr_34105_36404 = state_34060__$1;
(statearr_34105_36404[(2)] = null);

(statearr_34105_36404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (21))){
var inst_33978 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34109_36405 = state_34060__$1;
(statearr_34109_36405[(2)] = inst_33978);

(statearr_34109_36405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (31))){
var inst_34004 = (state_34060[(9)]);
var inst_34008 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_34004);
var state_34060__$1 = state_34060;
var statearr_34110_36406 = state_34060__$1;
(statearr_34110_36406[(2)] = inst_34008);

(statearr_34110_36406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (32))){
var inst_33999 = (state_34060[(10)]);
var inst_33998 = (state_34060[(19)]);
var inst_33996 = (state_34060[(20)]);
var inst_33997 = (state_34060[(12)]);
var inst_34010 = (state_34060[(2)]);
var inst_34011 = (inst_33999 + (1));
var tmp34106 = inst_33998;
var tmp34107 = inst_33996;
var tmp34108 = inst_33997;
var inst_33996__$1 = tmp34107;
var inst_33997__$1 = tmp34108;
var inst_33998__$1 = tmp34106;
var inst_33999__$1 = inst_34011;
var state_34060__$1 = (function (){var statearr_34112 = state_34060;
(statearr_34112[(10)] = inst_33999__$1);

(statearr_34112[(21)] = inst_34010);

(statearr_34112[(19)] = inst_33998__$1);

(statearr_34112[(20)] = inst_33996__$1);

(statearr_34112[(12)] = inst_33997__$1);

return statearr_34112;
})();
var statearr_34113_36407 = state_34060__$1;
(statearr_34113_36407[(2)] = null);

(statearr_34113_36407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (40))){
var inst_34023 = (state_34060[(22)]);
var inst_34027 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_34023);
var state_34060__$1 = state_34060;
var statearr_34120_36409 = state_34060__$1;
(statearr_34120_36409[(2)] = inst_34027);

(statearr_34120_36409[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (33))){
var inst_34014 = (state_34060[(23)]);
var inst_34016 = cljs.core.chunked_seq_QMARK_(inst_34014);
var state_34060__$1 = state_34060;
if(inst_34016){
var statearr_34125_36411 = state_34060__$1;
(statearr_34125_36411[(1)] = (36));

} else {
var statearr_34127_36415 = state_34060__$1;
(statearr_34127_36415[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (13))){
var inst_33944 = (state_34060[(24)]);
var inst_33947 = cljs.core.async.close_BANG_(inst_33944);
var state_34060__$1 = state_34060;
var statearr_34139_36417 = state_34060__$1;
(statearr_34139_36417[(2)] = inst_33947);

(statearr_34139_36417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (22))){
var inst_33968 = (state_34060[(8)]);
var inst_33971 = cljs.core.async.close_BANG_(inst_33968);
var state_34060__$1 = state_34060;
var statearr_34145_36419 = state_34060__$1;
(statearr_34145_36419[(2)] = inst_33971);

(statearr_34145_36419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (36))){
var inst_34014 = (state_34060[(23)]);
var inst_34018 = cljs.core.chunk_first(inst_34014);
var inst_34019 = cljs.core.chunk_rest(inst_34014);
var inst_34020 = cljs.core.count(inst_34018);
var inst_33996 = inst_34019;
var inst_33997 = inst_34018;
var inst_33998 = inst_34020;
var inst_33999 = (0);
var state_34060__$1 = (function (){var statearr_34147 = state_34060;
(statearr_34147[(10)] = inst_33999);

(statearr_34147[(19)] = inst_33998);

(statearr_34147[(20)] = inst_33996);

(statearr_34147[(12)] = inst_33997);

return statearr_34147;
})();
var statearr_34152_36420 = state_34060__$1;
(statearr_34152_36420[(2)] = null);

(statearr_34152_36420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (41))){
var inst_34014 = (state_34060[(23)]);
var inst_34029 = (state_34060[(2)]);
var inst_34030 = cljs.core.next(inst_34014);
var inst_33996 = inst_34030;
var inst_33997 = null;
var inst_33998 = (0);
var inst_33999 = (0);
var state_34060__$1 = (function (){var statearr_34153 = state_34060;
(statearr_34153[(10)] = inst_33999);

(statearr_34153[(25)] = inst_34029);

(statearr_34153[(19)] = inst_33998);

(statearr_34153[(20)] = inst_33996);

(statearr_34153[(12)] = inst_33997);

return statearr_34153;
})();
var statearr_34154_36421 = state_34060__$1;
(statearr_34154_36421[(2)] = null);

(statearr_34154_36421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (43))){
var state_34060__$1 = state_34060;
var statearr_34156_36422 = state_34060__$1;
(statearr_34156_36422[(2)] = null);

(statearr_34156_36422[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (29))){
var inst_34038 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34157_36423 = state_34060__$1;
(statearr_34157_36423[(2)] = inst_34038);

(statearr_34157_36423[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (44))){
var inst_34049 = (state_34060[(2)]);
var state_34060__$1 = (function (){var statearr_34158 = state_34060;
(statearr_34158[(26)] = inst_34049);

return statearr_34158;
})();
var statearr_34159_36425 = state_34060__$1;
(statearr_34159_36425[(2)] = null);

(statearr_34159_36425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (6))){
var inst_33988 = (state_34060[(27)]);
var inst_33987 = cljs.core.deref(cs);
var inst_33988__$1 = cljs.core.keys(inst_33987);
var inst_33989 = cljs.core.count(inst_33988__$1);
var inst_33990 = cljs.core.reset_BANG_(dctr,inst_33989);
var inst_33995 = cljs.core.seq(inst_33988__$1);
var inst_33996 = inst_33995;
var inst_33997 = null;
var inst_33998 = (0);
var inst_33999 = (0);
var state_34060__$1 = (function (){var statearr_34160 = state_34060;
(statearr_34160[(27)] = inst_33988__$1);

(statearr_34160[(10)] = inst_33999);

(statearr_34160[(19)] = inst_33998);

(statearr_34160[(20)] = inst_33996);

(statearr_34160[(28)] = inst_33990);

(statearr_34160[(12)] = inst_33997);

return statearr_34160;
})();
var statearr_34163_36430 = state_34060__$1;
(statearr_34163_36430[(2)] = null);

(statearr_34163_36430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (28))){
var inst_33996 = (state_34060[(20)]);
var inst_34014 = (state_34060[(23)]);
var inst_34014__$1 = cljs.core.seq(inst_33996);
var state_34060__$1 = (function (){var statearr_34164 = state_34060;
(statearr_34164[(23)] = inst_34014__$1);

return statearr_34164;
})();
if(inst_34014__$1){
var statearr_34166_36431 = state_34060__$1;
(statearr_34166_36431[(1)] = (33));

} else {
var statearr_34170_36432 = state_34060__$1;
(statearr_34170_36432[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (25))){
var inst_33999 = (state_34060[(10)]);
var inst_33998 = (state_34060[(19)]);
var inst_34001 = (inst_33999 < inst_33998);
var inst_34002 = inst_34001;
var state_34060__$1 = state_34060;
if(cljs.core.truth_(inst_34002)){
var statearr_34171_36434 = state_34060__$1;
(statearr_34171_36434[(1)] = (27));

} else {
var statearr_34172_36435 = state_34060__$1;
(statearr_34172_36435[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (34))){
var state_34060__$1 = state_34060;
var statearr_34173_36436 = state_34060__$1;
(statearr_34173_36436[(2)] = null);

(statearr_34173_36436[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (17))){
var state_34060__$1 = state_34060;
var statearr_34174_36439 = state_34060__$1;
(statearr_34174_36439[(2)] = null);

(statearr_34174_36439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (3))){
var inst_34055 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34060__$1,inst_34055);
} else {
if((state_val_34061 === (12))){
var inst_33983 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34175_36441 = state_34060__$1;
(statearr_34175_36441[(2)] = inst_33983);

(statearr_34175_36441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (2))){
var state_34060__$1 = state_34060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34060__$1,(4),ch);
} else {
if((state_val_34061 === (23))){
var state_34060__$1 = state_34060;
var statearr_34180_36443 = state_34060__$1;
(statearr_34180_36443[(2)] = null);

(statearr_34180_36443[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (35))){
var inst_34036 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34183_36445 = state_34060__$1;
(statearr_34183_36445[(2)] = inst_34036);

(statearr_34183_36445[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (19))){
var inst_33954 = (state_34060[(7)]);
var inst_33959 = cljs.core.chunk_first(inst_33954);
var inst_33960 = cljs.core.chunk_rest(inst_33954);
var inst_33961 = cljs.core.count(inst_33959);
var inst_33932 = inst_33960;
var inst_33933 = inst_33959;
var inst_33934 = inst_33961;
var inst_33935 = (0);
var state_34060__$1 = (function (){var statearr_34188 = state_34060;
(statearr_34188[(14)] = inst_33932);

(statearr_34188[(15)] = inst_33934);

(statearr_34188[(16)] = inst_33935);

(statearr_34188[(17)] = inst_33933);

return statearr_34188;
})();
var statearr_34189_36449 = state_34060__$1;
(statearr_34189_36449[(2)] = null);

(statearr_34189_36449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (11))){
var inst_33932 = (state_34060[(14)]);
var inst_33954 = (state_34060[(7)]);
var inst_33954__$1 = cljs.core.seq(inst_33932);
var state_34060__$1 = (function (){var statearr_34191 = state_34060;
(statearr_34191[(7)] = inst_33954__$1);

return statearr_34191;
})();
if(inst_33954__$1){
var statearr_34193_36451 = state_34060__$1;
(statearr_34193_36451[(1)] = (16));

} else {
var statearr_34194_36452 = state_34060__$1;
(statearr_34194_36452[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (9))){
var inst_33985 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34199_36453 = state_34060__$1;
(statearr_34199_36453[(2)] = inst_33985);

(statearr_34199_36453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (5))){
var inst_33930 = cljs.core.deref(cs);
var inst_33931 = cljs.core.seq(inst_33930);
var inst_33932 = inst_33931;
var inst_33933 = null;
var inst_33934 = (0);
var inst_33935 = (0);
var state_34060__$1 = (function (){var statearr_34202 = state_34060;
(statearr_34202[(14)] = inst_33932);

(statearr_34202[(15)] = inst_33934);

(statearr_34202[(16)] = inst_33935);

(statearr_34202[(17)] = inst_33933);

return statearr_34202;
})();
var statearr_34203_36456 = state_34060__$1;
(statearr_34203_36456[(2)] = null);

(statearr_34203_36456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (14))){
var state_34060__$1 = state_34060;
var statearr_34205_36457 = state_34060__$1;
(statearr_34205_36457[(2)] = null);

(statearr_34205_36457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (45))){
var inst_34046 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34208_36458 = state_34060__$1;
(statearr_34208_36458[(2)] = inst_34046);

(statearr_34208_36458[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (26))){
var inst_33988 = (state_34060[(27)]);
var inst_34040 = (state_34060[(2)]);
var inst_34042 = cljs.core.seq(inst_33988);
var state_34060__$1 = (function (){var statearr_34213 = state_34060;
(statearr_34213[(29)] = inst_34040);

return statearr_34213;
})();
if(inst_34042){
var statearr_34216_36462 = state_34060__$1;
(statearr_34216_36462[(1)] = (42));

} else {
var statearr_34217_36463 = state_34060__$1;
(statearr_34217_36463[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (16))){
var inst_33954 = (state_34060[(7)]);
var inst_33957 = cljs.core.chunked_seq_QMARK_(inst_33954);
var state_34060__$1 = state_34060;
if(inst_33957){
var statearr_34218_36465 = state_34060__$1;
(statearr_34218_36465[(1)] = (19));

} else {
var statearr_34219_36466 = state_34060__$1;
(statearr_34219_36466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (38))){
var inst_34033 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34221_36467 = state_34060__$1;
(statearr_34221_36467[(2)] = inst_34033);

(statearr_34221_36467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (30))){
var state_34060__$1 = state_34060;
var statearr_34222_36468 = state_34060__$1;
(statearr_34222_36468[(2)] = null);

(statearr_34222_36468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (10))){
var inst_33935 = (state_34060[(16)]);
var inst_33933 = (state_34060[(17)]);
var inst_33943 = cljs.core._nth(inst_33933,inst_33935);
var inst_33944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33943,(0),null);
var inst_33945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33943,(1),null);
var state_34060__$1 = (function (){var statearr_34225 = state_34060;
(statearr_34225[(24)] = inst_33944);

return statearr_34225;
})();
if(cljs.core.truth_(inst_33945)){
var statearr_34227_36469 = state_34060__$1;
(statearr_34227_36469[(1)] = (13));

} else {
var statearr_34228_36470 = state_34060__$1;
(statearr_34228_36470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (18))){
var inst_33981 = (state_34060[(2)]);
var state_34060__$1 = state_34060;
var statearr_34229_36472 = state_34060__$1;
(statearr_34229_36472[(2)] = inst_33981);

(statearr_34229_36472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (42))){
var state_34060__$1 = state_34060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34060__$1,(45),dchan);
} else {
if((state_val_34061 === (37))){
var inst_33923 = (state_34060[(11)]);
var inst_34014 = (state_34060[(23)]);
var inst_34023 = (state_34060[(22)]);
var inst_34023__$1 = cljs.core.first(inst_34014);
var inst_34024 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34023__$1,inst_33923,done);
var state_34060__$1 = (function (){var statearr_34230 = state_34060;
(statearr_34230[(22)] = inst_34023__$1);

return statearr_34230;
})();
if(cljs.core.truth_(inst_34024)){
var statearr_34231_36473 = state_34060__$1;
(statearr_34231_36473[(1)] = (39));

} else {
var statearr_34233_36474 = state_34060__$1;
(statearr_34233_36474[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34061 === (8))){
var inst_33934 = (state_34060[(15)]);
var inst_33935 = (state_34060[(16)]);
var inst_33937 = (inst_33935 < inst_33934);
var inst_33938 = inst_33937;
var state_34060__$1 = state_34060;
if(cljs.core.truth_(inst_33938)){
var statearr_34237_36475 = state_34060__$1;
(statearr_34237_36475[(1)] = (10));

} else {
var statearr_34238_36476 = state_34060__$1;
(statearr_34238_36476[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31762__auto__ = null;
var cljs$core$async$mult_$_state_machine__31762__auto____0 = (function (){
var statearr_34240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34240[(0)] = cljs$core$async$mult_$_state_machine__31762__auto__);

(statearr_34240[(1)] = (1));

return statearr_34240;
});
var cljs$core$async$mult_$_state_machine__31762__auto____1 = (function (state_34060){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_34060);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e34241){var ex__31765__auto__ = e34241;
var statearr_34242_36480 = state_34060;
(statearr_34242_36480[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_34060[(4)]))){
var statearr_34244_36481 = state_34060;
(statearr_34244_36481[(1)] = cljs.core.first((state_34060[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36484 = state_34060;
state_34060 = G__36484;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31762__auto__ = function(state_34060){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31762__auto____1.call(this,state_34060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31762__auto____0;
cljs$core$async$mult_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31762__auto____1;
return cljs$core$async$mult_$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_34247 = f__32563__auto__();
(statearr_34247[(6)] = c__32561__auto___36386);

return statearr_34247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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
var G__34251 = arguments.length;
switch (G__34251) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_36488 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_36488(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36491 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_36491(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36493 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36493(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36498 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_36498(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36501 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36501(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36503 = arguments.length;
var i__5727__auto___36504 = (0);
while(true){
if((i__5727__auto___36504 < len__5726__auto___36503)){
args__5732__auto__.push((arguments[i__5727__auto___36504]));

var G__36505 = (i__5727__auto___36504 + (1));
i__5727__auto___36504 = G__36505;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34286){
var map__34287 = p__34286;
var map__34287__$1 = cljs.core.__destructure_map(map__34287);
var opts = map__34287__$1;
var statearr_34288_36509 = state;
(statearr_34288_36509[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34290_36510 = state;
(statearr_34290_36510[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_34295_36514 = state;
(statearr_34295_36514[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34278){
var G__34279 = cljs.core.first(seq34278);
var seq34278__$1 = cljs.core.next(seq34278);
var G__34280 = cljs.core.first(seq34278__$1);
var seq34278__$2 = cljs.core.next(seq34278__$1);
var G__34281 = cljs.core.first(seq34278__$2);
var seq34278__$3 = cljs.core.next(seq34278__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34279,G__34280,G__34281,seq34278__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34330 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34331){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34331 = meta34331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34332,meta34331__$1){
var self__ = this;
var _34332__$1 = this;
return (new cljs.core.async.t_cljs$core$async34330(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34331__$1));
}));

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34332){
var self__ = this;
var _34332__$1 = this;
return self__.meta34331;
}));

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async34330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34331","meta34331",968197693,null)], null);
}));

(cljs.core.async.t_cljs$core$async34330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34330");

(cljs.core.async.t_cljs$core$async34330.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34330.
 */
cljs.core.async.__GT_t_cljs$core$async34330 = (function cljs$core$async$__GT_t_cljs$core$async34330(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34331){
return (new cljs.core.async.t_cljs$core$async34330(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34331));
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
var m = (new cljs.core.async.t_cljs$core$async34330(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__32561__auto___36591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_34418){
var state_val_34419 = (state_34418[(1)]);
if((state_val_34419 === (7))){
var inst_34378 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
if(cljs.core.truth_(inst_34378)){
var statearr_34425_36593 = state_34418__$1;
(statearr_34425_36593[(1)] = (8));

} else {
var statearr_34427_36594 = state_34418__$1;
(statearr_34427_36594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (20))){
var inst_34371 = (state_34418[(7)]);
var state_34418__$1 = state_34418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34418__$1,(23),out,inst_34371);
} else {
if((state_val_34419 === (1))){
var inst_34353 = calc_state();
var inst_34355 = cljs.core.__destructure_map(inst_34353);
var inst_34356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34355,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34355,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34355,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34359 = inst_34353;
var state_34418__$1 = (function (){var statearr_34456 = state_34418;
(statearr_34456[(8)] = inst_34356);

(statearr_34456[(9)] = inst_34359);

(statearr_34456[(10)] = inst_34357);

(statearr_34456[(11)] = inst_34358);

return statearr_34456;
})();
var statearr_34457_36600 = state_34418__$1;
(statearr_34457_36600[(2)] = null);

(statearr_34457_36600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (24))){
var inst_34362 = (state_34418[(12)]);
var inst_34359 = inst_34362;
var state_34418__$1 = (function (){var statearr_34460 = state_34418;
(statearr_34460[(9)] = inst_34359);

return statearr_34460;
})();
var statearr_34461_36601 = state_34418__$1;
(statearr_34461_36601[(2)] = null);

(statearr_34461_36601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (4))){
var inst_34373 = (state_34418[(13)]);
var inst_34371 = (state_34418[(7)]);
var inst_34370 = (state_34418[(2)]);
var inst_34371__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34370,(0),null);
var inst_34372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34370,(1),null);
var inst_34373__$1 = (inst_34371__$1 == null);
var state_34418__$1 = (function (){var statearr_34469 = state_34418;
(statearr_34469[(14)] = inst_34372);

(statearr_34469[(13)] = inst_34373__$1);

(statearr_34469[(7)] = inst_34371__$1);

return statearr_34469;
})();
if(cljs.core.truth_(inst_34373__$1)){
var statearr_34474_36605 = state_34418__$1;
(statearr_34474_36605[(1)] = (5));

} else {
var statearr_34475_36606 = state_34418__$1;
(statearr_34475_36606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (15))){
var inst_34392 = (state_34418[(15)]);
var inst_34363 = (state_34418[(16)]);
var inst_34392__$1 = cljs.core.empty_QMARK_(inst_34363);
var state_34418__$1 = (function (){var statearr_34477 = state_34418;
(statearr_34477[(15)] = inst_34392__$1);

return statearr_34477;
})();
if(inst_34392__$1){
var statearr_34478_36609 = state_34418__$1;
(statearr_34478_36609[(1)] = (17));

} else {
var statearr_34479_36610 = state_34418__$1;
(statearr_34479_36610[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (21))){
var inst_34362 = (state_34418[(12)]);
var inst_34359 = inst_34362;
var state_34418__$1 = (function (){var statearr_34483 = state_34418;
(statearr_34483[(9)] = inst_34359);

return statearr_34483;
})();
var statearr_34484_36612 = state_34418__$1;
(statearr_34484_36612[(2)] = null);

(statearr_34484_36612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (13))){
var inst_34385 = (state_34418[(2)]);
var inst_34386 = calc_state();
var inst_34359 = inst_34386;
var state_34418__$1 = (function (){var statearr_34485 = state_34418;
(statearr_34485[(9)] = inst_34359);

(statearr_34485[(17)] = inst_34385);

return statearr_34485;
})();
var statearr_34486_36617 = state_34418__$1;
(statearr_34486_36617[(2)] = null);

(statearr_34486_36617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (22))){
var inst_34412 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
var statearr_34487_36619 = state_34418__$1;
(statearr_34487_36619[(2)] = inst_34412);

(statearr_34487_36619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (6))){
var inst_34372 = (state_34418[(14)]);
var inst_34376 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34372,change);
var state_34418__$1 = state_34418;
var statearr_34489_36621 = state_34418__$1;
(statearr_34489_36621[(2)] = inst_34376);

(statearr_34489_36621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (25))){
var state_34418__$1 = state_34418;
var statearr_34491_36622 = state_34418__$1;
(statearr_34491_36622[(2)] = null);

(statearr_34491_36622[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (17))){
var inst_34364 = (state_34418[(18)]);
var inst_34372 = (state_34418[(14)]);
var inst_34394 = (inst_34364.cljs$core$IFn$_invoke$arity$1 ? inst_34364.cljs$core$IFn$_invoke$arity$1(inst_34372) : inst_34364.call(null, inst_34372));
var inst_34395 = cljs.core.not(inst_34394);
var state_34418__$1 = state_34418;
var statearr_34492_36623 = state_34418__$1;
(statearr_34492_36623[(2)] = inst_34395);

(statearr_34492_36623[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (3))){
var inst_34416 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34418__$1,inst_34416);
} else {
if((state_val_34419 === (12))){
var state_34418__$1 = state_34418;
var statearr_34495_36625 = state_34418__$1;
(statearr_34495_36625[(2)] = null);

(statearr_34495_36625[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (2))){
var inst_34362 = (state_34418[(12)]);
var inst_34359 = (state_34418[(9)]);
var inst_34362__$1 = cljs.core.__destructure_map(inst_34359);
var inst_34363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34362__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34362__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34362__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34418__$1 = (function (){var statearr_34496 = state_34418;
(statearr_34496[(12)] = inst_34362__$1);

(statearr_34496[(18)] = inst_34364);

(statearr_34496[(16)] = inst_34363);

return statearr_34496;
})();
return cljs.core.async.ioc_alts_BANG_(state_34418__$1,(4),inst_34365);
} else {
if((state_val_34419 === (23))){
var inst_34403 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
if(cljs.core.truth_(inst_34403)){
var statearr_34499_36629 = state_34418__$1;
(statearr_34499_36629[(1)] = (24));

} else {
var statearr_34500_36633 = state_34418__$1;
(statearr_34500_36633[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (19))){
var inst_34398 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
var statearr_34505_36635 = state_34418__$1;
(statearr_34505_36635[(2)] = inst_34398);

(statearr_34505_36635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (11))){
var inst_34372 = (state_34418[(14)]);
var inst_34382 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34372);
var state_34418__$1 = state_34418;
var statearr_34511_36636 = state_34418__$1;
(statearr_34511_36636[(2)] = inst_34382);

(statearr_34511_36636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (9))){
var inst_34372 = (state_34418[(14)]);
var inst_34389 = (state_34418[(19)]);
var inst_34363 = (state_34418[(16)]);
var inst_34389__$1 = (inst_34363.cljs$core$IFn$_invoke$arity$1 ? inst_34363.cljs$core$IFn$_invoke$arity$1(inst_34372) : inst_34363.call(null, inst_34372));
var state_34418__$1 = (function (){var statearr_34514 = state_34418;
(statearr_34514[(19)] = inst_34389__$1);

return statearr_34514;
})();
if(cljs.core.truth_(inst_34389__$1)){
var statearr_34517_36637 = state_34418__$1;
(statearr_34517_36637[(1)] = (14));

} else {
var statearr_34518_36638 = state_34418__$1;
(statearr_34518_36638[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (5))){
var inst_34373 = (state_34418[(13)]);
var state_34418__$1 = state_34418;
var statearr_34519_36639 = state_34418__$1;
(statearr_34519_36639[(2)] = inst_34373);

(statearr_34519_36639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (14))){
var inst_34389 = (state_34418[(19)]);
var state_34418__$1 = state_34418;
var statearr_34523_36640 = state_34418__$1;
(statearr_34523_36640[(2)] = inst_34389);

(statearr_34523_36640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (26))){
var inst_34408 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
var statearr_34528_36641 = state_34418__$1;
(statearr_34528_36641[(2)] = inst_34408);

(statearr_34528_36641[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (16))){
var inst_34400 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
if(cljs.core.truth_(inst_34400)){
var statearr_34529_36642 = state_34418__$1;
(statearr_34529_36642[(1)] = (20));

} else {
var statearr_34530_36643 = state_34418__$1;
(statearr_34530_36643[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (10))){
var inst_34414 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
var statearr_34536_36644 = state_34418__$1;
(statearr_34536_36644[(2)] = inst_34414);

(statearr_34536_36644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (18))){
var inst_34392 = (state_34418[(15)]);
var state_34418__$1 = state_34418;
var statearr_34537_36645 = state_34418__$1;
(statearr_34537_36645[(2)] = inst_34392);

(statearr_34537_36645[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (8))){
var inst_34371 = (state_34418[(7)]);
var inst_34380 = (inst_34371 == null);
var state_34418__$1 = state_34418;
if(cljs.core.truth_(inst_34380)){
var statearr_34539_36646 = state_34418__$1;
(statearr_34539_36646[(1)] = (11));

} else {
var statearr_34541_36647 = state_34418__$1;
(statearr_34541_36647[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__31762__auto__ = null;
var cljs$core$async$mix_$_state_machine__31762__auto____0 = (function (){
var statearr_34546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34546[(0)] = cljs$core$async$mix_$_state_machine__31762__auto__);

(statearr_34546[(1)] = (1));

return statearr_34546;
});
var cljs$core$async$mix_$_state_machine__31762__auto____1 = (function (state_34418){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_34418);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e34547){var ex__31765__auto__ = e34547;
var statearr_34548_36649 = state_34418;
(statearr_34548_36649[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_34418[(4)]))){
var statearr_34549_36650 = state_34418;
(statearr_34549_36650[(1)] = cljs.core.first((state_34418[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36652 = state_34418;
state_34418 = G__36652;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31762__auto__ = function(state_34418){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31762__auto____1.call(this,state_34418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31762__auto____0;
cljs$core$async$mix_$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31762__auto____1;
return cljs$core$async$mix_$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_34551 = f__32563__auto__();
(statearr_34551[(6)] = c__32561__auto___36591);

return statearr_34551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_36654 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_36654(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36656 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_36656(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36659 = (function() {
var G__36660 = null;
var G__36660__1 = (function (p){
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
var G__36660__2 = (function (p,v){
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
G__36660 = function(p,v){
switch(arguments.length){
case 1:
return G__36660__1.call(this,p);
case 2:
return G__36660__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36660.cljs$core$IFn$_invoke$arity$1 = G__36660__1;
G__36660.cljs$core$IFn$_invoke$arity$2 = G__36660__2;
return G__36660;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34592 = arguments.length;
switch (G__34592) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36659(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36659(p,v);
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
cljs.core.async.t_cljs$core$async34612 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34613){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34613 = meta34613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34614,meta34613__$1){
var self__ = this;
var _34614__$1 = this;
return (new cljs.core.async.t_cljs$core$async34612(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34613__$1));
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34614){
var self__ = this;
var _34614__$1 = this;
return self__.meta34613;
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34613","meta34613",914794131,null)], null);
}));

(cljs.core.async.t_cljs$core$async34612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34612");

(cljs.core.async.t_cljs$core$async34612.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34612.
 */
cljs.core.async.__GT_t_cljs$core$async34612 = (function cljs$core$async$__GT_t_cljs$core$async34612(ch,topic_fn,buf_fn,mults,ensure_mult,meta34613){
return (new cljs.core.async.t_cljs$core$async34612(ch,topic_fn,buf_fn,mults,ensure_mult,meta34613));
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
var G__34607 = arguments.length;
switch (G__34607) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34603_SHARP_){
if(cljs.core.truth_((p1__34603_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34603_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34603_SHARP_.call(null, topic)))){
return p1__34603_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34603_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async34612(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__32561__auto___36671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_34722){
var state_val_34723 = (state_34722[(1)]);
if((state_val_34723 === (7))){
var inst_34716 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34755_36672 = state_34722__$1;
(statearr_34755_36672[(2)] = inst_34716);

(statearr_34755_36672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (20))){
var state_34722__$1 = state_34722;
var statearr_34759_36673 = state_34722__$1;
(statearr_34759_36673[(2)] = null);

(statearr_34759_36673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (1))){
var state_34722__$1 = state_34722;
var statearr_34765_36675 = state_34722__$1;
(statearr_34765_36675[(2)] = null);

(statearr_34765_36675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (24))){
var inst_34697 = (state_34722[(7)]);
var inst_34708 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34697);
var state_34722__$1 = state_34722;
var statearr_34768_36676 = state_34722__$1;
(statearr_34768_36676[(2)] = inst_34708);

(statearr_34768_36676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (4))){
var inst_34637 = (state_34722[(8)]);
var inst_34637__$1 = (state_34722[(2)]);
var inst_34638 = (inst_34637__$1 == null);
var state_34722__$1 = (function (){var statearr_34788 = state_34722;
(statearr_34788[(8)] = inst_34637__$1);

return statearr_34788;
})();
if(cljs.core.truth_(inst_34638)){
var statearr_34799_36677 = state_34722__$1;
(statearr_34799_36677[(1)] = (5));

} else {
var statearr_34804_36678 = state_34722__$1;
(statearr_34804_36678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (15))){
var inst_34691 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34817_36680 = state_34722__$1;
(statearr_34817_36680[(2)] = inst_34691);

(statearr_34817_36680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (21))){
var inst_34713 = (state_34722[(2)]);
var state_34722__$1 = (function (){var statearr_34827 = state_34722;
(statearr_34827[(9)] = inst_34713);

return statearr_34827;
})();
var statearr_34830_36681 = state_34722__$1;
(statearr_34830_36681[(2)] = null);

(statearr_34830_36681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (13))){
var inst_34670 = (state_34722[(10)]);
var inst_34672 = cljs.core.chunked_seq_QMARK_(inst_34670);
var state_34722__$1 = state_34722;
if(inst_34672){
var statearr_34846_36683 = state_34722__$1;
(statearr_34846_36683[(1)] = (16));

} else {
var statearr_34853_36684 = state_34722__$1;
(statearr_34853_36684[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (22))){
var inst_34705 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34705)){
var statearr_34857_36685 = state_34722__$1;
(statearr_34857_36685[(1)] = (23));

} else {
var statearr_34863_36686 = state_34722__$1;
(statearr_34863_36686[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (6))){
var inst_34699 = (state_34722[(11)]);
var inst_34697 = (state_34722[(7)]);
var inst_34637 = (state_34722[(8)]);
var inst_34697__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34637) : topic_fn.call(null, inst_34637));
var inst_34698 = cljs.core.deref(mults);
var inst_34699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34698,inst_34697__$1);
var state_34722__$1 = (function (){var statearr_34888 = state_34722;
(statearr_34888[(11)] = inst_34699__$1);

(statearr_34888[(7)] = inst_34697__$1);

return statearr_34888;
})();
if(cljs.core.truth_(inst_34699__$1)){
var statearr_34893_36687 = state_34722__$1;
(statearr_34893_36687[(1)] = (19));

} else {
var statearr_34897_36688 = state_34722__$1;
(statearr_34897_36688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (25))){
var inst_34710 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34913_36689 = state_34722__$1;
(statearr_34913_36689[(2)] = inst_34710);

(statearr_34913_36689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (17))){
var inst_34670 = (state_34722[(10)]);
var inst_34680 = cljs.core.first(inst_34670);
var inst_34683 = cljs.core.async.muxch_STAR_(inst_34680);
var inst_34684 = cljs.core.async.close_BANG_(inst_34683);
var inst_34685 = cljs.core.next(inst_34670);
var inst_34647 = inst_34685;
var inst_34648 = null;
var inst_34649 = (0);
var inst_34650 = (0);
var state_34722__$1 = (function (){var statearr_34935 = state_34722;
(statearr_34935[(12)] = inst_34684);

(statearr_34935[(13)] = inst_34647);

(statearr_34935[(14)] = inst_34650);

(statearr_34935[(15)] = inst_34648);

(statearr_34935[(16)] = inst_34649);

return statearr_34935;
})();
var statearr_34936_36692 = state_34722__$1;
(statearr_34936_36692[(2)] = null);

(statearr_34936_36692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (3))){
var inst_34719 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34722__$1,inst_34719);
} else {
if((state_val_34723 === (12))){
var inst_34693 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34951_36696 = state_34722__$1;
(statearr_34951_36696[(2)] = inst_34693);

(statearr_34951_36696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (2))){
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34722__$1,(4),ch);
} else {
if((state_val_34723 === (23))){
var state_34722__$1 = state_34722;
var statearr_34954_36697 = state_34722__$1;
(statearr_34954_36697[(2)] = null);

(statearr_34954_36697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (19))){
var inst_34699 = (state_34722[(11)]);
var inst_34637 = (state_34722[(8)]);
var inst_34703 = cljs.core.async.muxch_STAR_(inst_34699);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34722__$1,(22),inst_34703,inst_34637);
} else {
if((state_val_34723 === (11))){
var inst_34647 = (state_34722[(13)]);
var inst_34670 = (state_34722[(10)]);
var inst_34670__$1 = cljs.core.seq(inst_34647);
var state_34722__$1 = (function (){var statearr_34972 = state_34722;
(statearr_34972[(10)] = inst_34670__$1);

return statearr_34972;
})();
if(inst_34670__$1){
var statearr_34975_36698 = state_34722__$1;
(statearr_34975_36698[(1)] = (13));

} else {
var statearr_34976_36699 = state_34722__$1;
(statearr_34976_36699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (9))){
var inst_34695 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34978_36700 = state_34722__$1;
(statearr_34978_36700[(2)] = inst_34695);

(statearr_34978_36700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (5))){
var inst_34644 = cljs.core.deref(mults);
var inst_34645 = cljs.core.vals(inst_34644);
var inst_34646 = cljs.core.seq(inst_34645);
var inst_34647 = inst_34646;
var inst_34648 = null;
var inst_34649 = (0);
var inst_34650 = (0);
var state_34722__$1 = (function (){var statearr_34984 = state_34722;
(statearr_34984[(13)] = inst_34647);

(statearr_34984[(14)] = inst_34650);

(statearr_34984[(15)] = inst_34648);

(statearr_34984[(16)] = inst_34649);

return statearr_34984;
})();
var statearr_34985_36702 = state_34722__$1;
(statearr_34985_36702[(2)] = null);

(statearr_34985_36702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (14))){
var state_34722__$1 = state_34722;
var statearr_34989_36703 = state_34722__$1;
(statearr_34989_36703[(2)] = null);

(statearr_34989_36703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (16))){
var inst_34670 = (state_34722[(10)]);
var inst_34675 = cljs.core.chunk_first(inst_34670);
var inst_34676 = cljs.core.chunk_rest(inst_34670);
var inst_34677 = cljs.core.count(inst_34675);
var inst_34647 = inst_34676;
var inst_34648 = inst_34675;
var inst_34649 = inst_34677;
var inst_34650 = (0);
var state_34722__$1 = (function (){var statearr_34991 = state_34722;
(statearr_34991[(13)] = inst_34647);

(statearr_34991[(14)] = inst_34650);

(statearr_34991[(15)] = inst_34648);

(statearr_34991[(16)] = inst_34649);

return statearr_34991;
})();
var statearr_34992_36705 = state_34722__$1;
(statearr_34992_36705[(2)] = null);

(statearr_34992_36705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (10))){
var inst_34647 = (state_34722[(13)]);
var inst_34650 = (state_34722[(14)]);
var inst_34648 = (state_34722[(15)]);
var inst_34649 = (state_34722[(16)]);
var inst_34660 = cljs.core._nth(inst_34648,inst_34650);
var inst_34661 = cljs.core.async.muxch_STAR_(inst_34660);
var inst_34662 = cljs.core.async.close_BANG_(inst_34661);
var inst_34663 = (inst_34650 + (1));
var tmp34986 = inst_34647;
var tmp34987 = inst_34648;
var tmp34988 = inst_34649;
var inst_34647__$1 = tmp34986;
var inst_34648__$1 = tmp34987;
var inst_34649__$1 = tmp34988;
var inst_34650__$1 = inst_34663;
var state_34722__$1 = (function (){var statearr_34996 = state_34722;
(statearr_34996[(13)] = inst_34647__$1);

(statearr_34996[(14)] = inst_34650__$1);

(statearr_34996[(15)] = inst_34648__$1);

(statearr_34996[(17)] = inst_34662);

(statearr_34996[(16)] = inst_34649__$1);

return statearr_34996;
})();
var statearr_34997_36711 = state_34722__$1;
(statearr_34997_36711[(2)] = null);

(statearr_34997_36711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (18))){
var inst_34688 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_35002_36712 = state_34722__$1;
(statearr_35002_36712[(2)] = inst_34688);

(statearr_35002_36712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (8))){
var inst_34650 = (state_34722[(14)]);
var inst_34649 = (state_34722[(16)]);
var inst_34652 = (inst_34650 < inst_34649);
var inst_34653 = inst_34652;
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34653)){
var statearr_35003_36713 = state_34722__$1;
(statearr_35003_36713[(1)] = (10));

} else {
var statearr_35004_36714 = state_34722__$1;
(statearr_35004_36714[(1)] = (11));

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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_35008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35008[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_35008[(1)] = (1));

return statearr_35008;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_34722){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_34722);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35009){var ex__31765__auto__ = e35009;
var statearr_35011_36715 = state_34722;
(statearr_35011_36715[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_34722[(4)]))){
var statearr_35013_36716 = state_34722;
(statearr_35013_36716[(1)] = cljs.core.first((state_34722[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36717 = state_34722;
state_34722 = G__36717;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_34722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_34722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35014 = f__32563__auto__();
(statearr_35014[(6)] = c__32561__auto___36671);

return statearr_35014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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
var G__35019 = arguments.length;
switch (G__35019) {
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
var G__35050 = arguments.length;
switch (G__35050) {
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
var G__35065 = arguments.length;
switch (G__35065) {
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
var c__32561__auto___36724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35126){
var state_val_35127 = (state_35126[(1)]);
if((state_val_35127 === (7))){
var state_35126__$1 = state_35126;
var statearr_35133_36725 = state_35126__$1;
(statearr_35133_36725[(2)] = null);

(statearr_35133_36725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (1))){
var state_35126__$1 = state_35126;
var statearr_35137_36726 = state_35126__$1;
(statearr_35137_36726[(2)] = null);

(statearr_35137_36726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (4))){
var inst_35083 = (state_35126[(7)]);
var inst_35082 = (state_35126[(8)]);
var inst_35086 = (inst_35083 < inst_35082);
var state_35126__$1 = state_35126;
if(cljs.core.truth_(inst_35086)){
var statearr_35142_36727 = state_35126__$1;
(statearr_35142_36727[(1)] = (6));

} else {
var statearr_35144_36728 = state_35126__$1;
(statearr_35144_36728[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (15))){
var inst_35112 = (state_35126[(9)]);
var inst_35117 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35112);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35126__$1,(17),out,inst_35117);
} else {
if((state_val_35127 === (13))){
var inst_35112 = (state_35126[(9)]);
var inst_35112__$1 = (state_35126[(2)]);
var inst_35113 = cljs.core.some(cljs.core.nil_QMARK_,inst_35112__$1);
var state_35126__$1 = (function (){var statearr_35146 = state_35126;
(statearr_35146[(9)] = inst_35112__$1);

return statearr_35146;
})();
if(cljs.core.truth_(inst_35113)){
var statearr_35147_36729 = state_35126__$1;
(statearr_35147_36729[(1)] = (14));

} else {
var statearr_35148_36730 = state_35126__$1;
(statearr_35148_36730[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (6))){
var state_35126__$1 = state_35126;
var statearr_35149_36733 = state_35126__$1;
(statearr_35149_36733[(2)] = null);

(statearr_35149_36733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (17))){
var inst_35119 = (state_35126[(2)]);
var state_35126__$1 = (function (){var statearr_35153 = state_35126;
(statearr_35153[(10)] = inst_35119);

return statearr_35153;
})();
var statearr_35154_36734 = state_35126__$1;
(statearr_35154_36734[(2)] = null);

(statearr_35154_36734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (3))){
var inst_35124 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35126__$1,inst_35124);
} else {
if((state_val_35127 === (12))){
var _ = (function (){var statearr_35155 = state_35126;
(statearr_35155[(4)] = cljs.core.rest((state_35126[(4)])));

return statearr_35155;
})();
var state_35126__$1 = state_35126;
var ex35151 = (state_35126__$1[(2)]);
var statearr_35157_36735 = state_35126__$1;
(statearr_35157_36735[(5)] = ex35151);


if((ex35151 instanceof Object)){
var statearr_35159_36736 = state_35126__$1;
(statearr_35159_36736[(1)] = (11));

(statearr_35159_36736[(5)] = null);

} else {
throw ex35151;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (2))){
var inst_35081 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35082 = cnt;
var inst_35083 = (0);
var state_35126__$1 = (function (){var statearr_35167 = state_35126;
(statearr_35167[(7)] = inst_35083);

(statearr_35167[(11)] = inst_35081);

(statearr_35167[(8)] = inst_35082);

return statearr_35167;
})();
var statearr_35168_36737 = state_35126__$1;
(statearr_35168_36737[(2)] = null);

(statearr_35168_36737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (11))){
var inst_35091 = (state_35126[(2)]);
var inst_35092 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35126__$1 = (function (){var statearr_35169 = state_35126;
(statearr_35169[(12)] = inst_35091);

return statearr_35169;
})();
var statearr_35170_36743 = state_35126__$1;
(statearr_35170_36743[(2)] = inst_35092);

(statearr_35170_36743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (9))){
var inst_35083 = (state_35126[(7)]);
var _ = (function (){var statearr_35173 = state_35126;
(statearr_35173[(4)] = cljs.core.cons((12),(state_35126[(4)])));

return statearr_35173;
})();
var inst_35098 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35083) : chs__$1.call(null, inst_35083));
var inst_35099 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35083) : done.call(null, inst_35083));
var inst_35100 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35098,inst_35099);
var ___$1 = (function (){var statearr_35177 = state_35126;
(statearr_35177[(4)] = cljs.core.rest((state_35126[(4)])));

return statearr_35177;
})();
var state_35126__$1 = state_35126;
var statearr_35180_36744 = state_35126__$1;
(statearr_35180_36744[(2)] = inst_35100);

(statearr_35180_36744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (5))){
var inst_35110 = (state_35126[(2)]);
var state_35126__$1 = (function (){var statearr_35181 = state_35126;
(statearr_35181[(13)] = inst_35110);

return statearr_35181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35126__$1,(13),dchan);
} else {
if((state_val_35127 === (14))){
var inst_35115 = cljs.core.async.close_BANG_(out);
var state_35126__$1 = state_35126;
var statearr_35186_36746 = state_35126__$1;
(statearr_35186_36746[(2)] = inst_35115);

(statearr_35186_36746[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (16))){
var inst_35122 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35190_36747 = state_35126__$1;
(statearr_35190_36747[(2)] = inst_35122);

(statearr_35190_36747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (10))){
var inst_35083 = (state_35126[(7)]);
var inst_35103 = (state_35126[(2)]);
var inst_35104 = (inst_35083 + (1));
var inst_35083__$1 = inst_35104;
var state_35126__$1 = (function (){var statearr_35191 = state_35126;
(statearr_35191[(14)] = inst_35103);

(statearr_35191[(7)] = inst_35083__$1);

return statearr_35191;
})();
var statearr_35192_36748 = state_35126__$1;
(statearr_35192_36748[(2)] = null);

(statearr_35192_36748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35127 === (8))){
var inst_35108 = (state_35126[(2)]);
var state_35126__$1 = state_35126;
var statearr_35193_36749 = state_35126__$1;
(statearr_35193_36749[(2)] = inst_35108);

(statearr_35193_36749[(1)] = (5));


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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_35194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35194[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_35194[(1)] = (1));

return statearr_35194;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_35126){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35126);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35197){var ex__31765__auto__ = e35197;
var statearr_35199_36751 = state_35126;
(statearr_35199_36751[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35126[(4)]))){
var statearr_35200_36752 = state_35126;
(statearr_35200_36752[(1)] = cljs.core.first((state_35126[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36753 = state_35126;
state_35126 = G__36753;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_35126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_35126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35250 = f__32563__auto__();
(statearr_35250[(6)] = c__32561__auto___36724);

return statearr_35250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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
var G__35279 = arguments.length;
switch (G__35279) {
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
var c__32561__auto___36755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35321){
var state_val_35322 = (state_35321[(1)]);
if((state_val_35322 === (7))){
var inst_35296 = (state_35321[(7)]);
var inst_35297 = (state_35321[(8)]);
var inst_35296__$1 = (state_35321[(2)]);
var inst_35297__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35296__$1,(0),null);
var inst_35298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35296__$1,(1),null);
var inst_35299 = (inst_35297__$1 == null);
var state_35321__$1 = (function (){var statearr_35340 = state_35321;
(statearr_35340[(7)] = inst_35296__$1);

(statearr_35340[(9)] = inst_35298);

(statearr_35340[(8)] = inst_35297__$1);

return statearr_35340;
})();
if(cljs.core.truth_(inst_35299)){
var statearr_35342_36758 = state_35321__$1;
(statearr_35342_36758[(1)] = (8));

} else {
var statearr_35346_36759 = state_35321__$1;
(statearr_35346_36759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (1))){
var inst_35284 = cljs.core.vec(chs);
var inst_35285 = inst_35284;
var state_35321__$1 = (function (){var statearr_35348 = state_35321;
(statearr_35348[(10)] = inst_35285);

return statearr_35348;
})();
var statearr_35350_36760 = state_35321__$1;
(statearr_35350_36760[(2)] = null);

(statearr_35350_36760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (4))){
var inst_35285 = (state_35321[(10)]);
var state_35321__$1 = state_35321;
return cljs.core.async.ioc_alts_BANG_(state_35321__$1,(7),inst_35285);
} else {
if((state_val_35322 === (6))){
var inst_35317 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35351_36761 = state_35321__$1;
(statearr_35351_36761[(2)] = inst_35317);

(statearr_35351_36761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (3))){
var inst_35319 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35321__$1,inst_35319);
} else {
if((state_val_35322 === (2))){
var inst_35285 = (state_35321[(10)]);
var inst_35287 = cljs.core.count(inst_35285);
var inst_35288 = (inst_35287 > (0));
var state_35321__$1 = state_35321;
if(cljs.core.truth_(inst_35288)){
var statearr_35353_36762 = state_35321__$1;
(statearr_35353_36762[(1)] = (4));

} else {
var statearr_35354_36763 = state_35321__$1;
(statearr_35354_36763[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (11))){
var inst_35285 = (state_35321[(10)]);
var inst_35310 = (state_35321[(2)]);
var tmp35352 = inst_35285;
var inst_35285__$1 = tmp35352;
var state_35321__$1 = (function (){var statearr_35355 = state_35321;
(statearr_35355[(10)] = inst_35285__$1);

(statearr_35355[(11)] = inst_35310);

return statearr_35355;
})();
var statearr_35357_36764 = state_35321__$1;
(statearr_35357_36764[(2)] = null);

(statearr_35357_36764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (9))){
var inst_35297 = (state_35321[(8)]);
var state_35321__$1 = state_35321;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35321__$1,(11),out,inst_35297);
} else {
if((state_val_35322 === (5))){
var inst_35315 = cljs.core.async.close_BANG_(out);
var state_35321__$1 = state_35321;
var statearr_35362_36765 = state_35321__$1;
(statearr_35362_36765[(2)] = inst_35315);

(statearr_35362_36765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (10))){
var inst_35313 = (state_35321[(2)]);
var state_35321__$1 = state_35321;
var statearr_35370_36766 = state_35321__$1;
(statearr_35370_36766[(2)] = inst_35313);

(statearr_35370_36766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35322 === (8))){
var inst_35296 = (state_35321[(7)]);
var inst_35298 = (state_35321[(9)]);
var inst_35297 = (state_35321[(8)]);
var inst_35285 = (state_35321[(10)]);
var inst_35303 = (function (){var cs = inst_35285;
var vec__35292 = inst_35296;
var v = inst_35297;
var c = inst_35298;
return (function (p1__35268_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35268_SHARP_);
});
})();
var inst_35306 = cljs.core.filterv(inst_35303,inst_35285);
var inst_35285__$1 = inst_35306;
var state_35321__$1 = (function (){var statearr_35380 = state_35321;
(statearr_35380[(10)] = inst_35285__$1);

return statearr_35380;
})();
var statearr_35381_36767 = state_35321__$1;
(statearr_35381_36767[(2)] = null);

(statearr_35381_36767[(1)] = (2));


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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_35382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35382[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_35382[(1)] = (1));

return statearr_35382;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_35321){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35321);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35383){var ex__31765__auto__ = e35383;
var statearr_35384_36768 = state_35321;
(statearr_35384_36768[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35321[(4)]))){
var statearr_35385_36769 = state_35321;
(statearr_35385_36769[(1)] = cljs.core.first((state_35321[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36770 = state_35321;
state_35321 = G__36770;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_35321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_35321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35395 = f__32563__auto__();
(statearr_35395[(6)] = c__32561__auto___36755);

return statearr_35395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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
var G__35413 = arguments.length;
switch (G__35413) {
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
var c__32561__auto___36773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35446){
var state_val_35447 = (state_35446[(1)]);
if((state_val_35447 === (7))){
var inst_35424 = (state_35446[(7)]);
var inst_35424__$1 = (state_35446[(2)]);
var inst_35425 = (inst_35424__$1 == null);
var inst_35426 = cljs.core.not(inst_35425);
var state_35446__$1 = (function (){var statearr_35453 = state_35446;
(statearr_35453[(7)] = inst_35424__$1);

return statearr_35453;
})();
if(inst_35426){
var statearr_35455_36776 = state_35446__$1;
(statearr_35455_36776[(1)] = (8));

} else {
var statearr_35456_36779 = state_35446__$1;
(statearr_35456_36779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (1))){
var inst_35416 = (0);
var state_35446__$1 = (function (){var statearr_35458 = state_35446;
(statearr_35458[(8)] = inst_35416);

return statearr_35458;
})();
var statearr_35459_36780 = state_35446__$1;
(statearr_35459_36780[(2)] = null);

(statearr_35459_36780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (4))){
var state_35446__$1 = state_35446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35446__$1,(7),ch);
} else {
if((state_val_35447 === (6))){
var inst_35438 = (state_35446[(2)]);
var state_35446__$1 = state_35446;
var statearr_35464_36781 = state_35446__$1;
(statearr_35464_36781[(2)] = inst_35438);

(statearr_35464_36781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (3))){
var inst_35443 = (state_35446[(2)]);
var inst_35444 = cljs.core.async.close_BANG_(out);
var state_35446__$1 = (function (){var statearr_35466 = state_35446;
(statearr_35466[(9)] = inst_35443);

return statearr_35466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35446__$1,inst_35444);
} else {
if((state_val_35447 === (2))){
var inst_35416 = (state_35446[(8)]);
var inst_35418 = (inst_35416 < n);
var state_35446__$1 = state_35446;
if(cljs.core.truth_(inst_35418)){
var statearr_35467_36782 = state_35446__$1;
(statearr_35467_36782[(1)] = (4));

} else {
var statearr_35468_36783 = state_35446__$1;
(statearr_35468_36783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (11))){
var inst_35416 = (state_35446[(8)]);
var inst_35430 = (state_35446[(2)]);
var inst_35431 = (inst_35416 + (1));
var inst_35416__$1 = inst_35431;
var state_35446__$1 = (function (){var statearr_35469 = state_35446;
(statearr_35469[(8)] = inst_35416__$1);

(statearr_35469[(10)] = inst_35430);

return statearr_35469;
})();
var statearr_35471_36786 = state_35446__$1;
(statearr_35471_36786[(2)] = null);

(statearr_35471_36786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (9))){
var state_35446__$1 = state_35446;
var statearr_35475_36787 = state_35446__$1;
(statearr_35475_36787[(2)] = null);

(statearr_35475_36787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (5))){
var state_35446__$1 = state_35446;
var statearr_35476_36789 = state_35446__$1;
(statearr_35476_36789[(2)] = null);

(statearr_35476_36789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (10))){
var inst_35435 = (state_35446[(2)]);
var state_35446__$1 = state_35446;
var statearr_35478_36790 = state_35446__$1;
(statearr_35478_36790[(2)] = inst_35435);

(statearr_35478_36790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35447 === (8))){
var inst_35424 = (state_35446[(7)]);
var state_35446__$1 = state_35446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35446__$1,(11),out,inst_35424);
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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_35483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35483[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_35483[(1)] = (1));

return statearr_35483;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_35446){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35446);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35484){var ex__31765__auto__ = e35484;
var statearr_35486_36794 = state_35446;
(statearr_35486_36794[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35446[(4)]))){
var statearr_35487_36796 = state_35446;
(statearr_35487_36796[(1)] = cljs.core.first((state_35446[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36797 = state_35446;
state_35446 = G__36797;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_35446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_35446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35488 = f__32563__auto__();
(statearr_35488[(6)] = c__32561__auto___36773);

return statearr_35488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
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
cljs.core.async.t_cljs$core$async35498 = (function (f,ch,meta35492,_,fn1,meta35499){
this.f = f;
this.ch = ch;
this.meta35492 = meta35492;
this._ = _;
this.fn1 = fn1;
this.meta35499 = meta35499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35500,meta35499__$1){
var self__ = this;
var _35500__$1 = this;
return (new cljs.core.async.t_cljs$core$async35498(self__.f,self__.ch,self__.meta35492,self__._,self__.fn1,meta35499__$1));
}));

(cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35500){
var self__ = this;
var _35500__$1 = this;
return self__.meta35499;
}));

(cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35490_SHARP_){
var G__35506 = (((p1__35490_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35490_SHARP_) : self__.f.call(null, p1__35490_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35506) : f1.call(null, G__35506));
});
}));

(cljs.core.async.t_cljs$core$async35498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35492","meta35492",1186222400,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35491","cljs.core.async/t_cljs$core$async35491",-138234008,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35499","meta35499",-525932290,null)], null);
}));

(cljs.core.async.t_cljs$core$async35498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35498");

(cljs.core.async.t_cljs$core$async35498.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35498.
 */
cljs.core.async.__GT_t_cljs$core$async35498 = (function cljs$core$async$__GT_t_cljs$core$async35498(f,ch,meta35492,_,fn1,meta35499){
return (new cljs.core.async.t_cljs$core$async35498(f,ch,meta35492,_,fn1,meta35499));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35491 = (function (f,ch,meta35492){
this.f = f;
this.ch = ch;
this.meta35492 = meta35492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35493,meta35492__$1){
var self__ = this;
var _35493__$1 = this;
return (new cljs.core.async.t_cljs$core$async35491(self__.f,self__.ch,meta35492__$1));
}));

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35493){
var self__ = this;
var _35493__$1 = this;
return self__.meta35492;
}));

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35498(self__.f,self__.ch,self__.meta35492,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35508 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35508) : self__.f.call(null, G__35508));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35492","meta35492",1186222400,null)], null);
}));

(cljs.core.async.t_cljs$core$async35491.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35491");

(cljs.core.async.t_cljs$core$async35491.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35491");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35491.
 */
cljs.core.async.__GT_t_cljs$core$async35491 = (function cljs$core$async$__GT_t_cljs$core$async35491(f,ch,meta35492){
return (new cljs.core.async.t_cljs$core$async35491(f,ch,meta35492));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35491(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35514 = (function (f,ch,meta35515){
this.f = f;
this.ch = ch;
this.meta35515 = meta35515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35516,meta35515__$1){
var self__ = this;
var _35516__$1 = this;
return (new cljs.core.async.t_cljs$core$async35514(self__.f,self__.ch,meta35515__$1));
}));

(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35516){
var self__ = this;
var _35516__$1 = this;
return self__.meta35515;
}));

(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35515","meta35515",-68944459,null)], null);
}));

(cljs.core.async.t_cljs$core$async35514.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35514");

(cljs.core.async.t_cljs$core$async35514.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35514");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35514.
 */
cljs.core.async.__GT_t_cljs$core$async35514 = (function cljs$core$async$__GT_t_cljs$core$async35514(f,ch,meta35515){
return (new cljs.core.async.t_cljs$core$async35514(f,ch,meta35515));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35514(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35517 = (function (p,ch,meta35518){
this.p = p;
this.ch = ch;
this.meta35518 = meta35518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35519,meta35518__$1){
var self__ = this;
var _35519__$1 = this;
return (new cljs.core.async.t_cljs$core$async35517(self__.p,self__.ch,meta35518__$1));
}));

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35519){
var self__ = this;
var _35519__$1 = this;
return self__.meta35518;
}));

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35518","meta35518",-1196614614,null)], null);
}));

(cljs.core.async.t_cljs$core$async35517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35517");

(cljs.core.async.t_cljs$core$async35517.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35517.
 */
cljs.core.async.__GT_t_cljs$core$async35517 = (function cljs$core$async$__GT_t_cljs$core$async35517(p,ch,meta35518){
return (new cljs.core.async.t_cljs$core$async35517(p,ch,meta35518));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35517(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35524 = arguments.length;
switch (G__35524) {
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
var c__32561__auto___36811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35546){
var state_val_35547 = (state_35546[(1)]);
if((state_val_35547 === (7))){
var inst_35542 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35553_36814 = state_35546__$1;
(statearr_35553_36814[(2)] = inst_35542);

(statearr_35553_36814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (1))){
var state_35546__$1 = state_35546;
var statearr_35554_36817 = state_35546__$1;
(statearr_35554_36817[(2)] = null);

(statearr_35554_36817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (4))){
var inst_35528 = (state_35546[(7)]);
var inst_35528__$1 = (state_35546[(2)]);
var inst_35529 = (inst_35528__$1 == null);
var state_35546__$1 = (function (){var statearr_35555 = state_35546;
(statearr_35555[(7)] = inst_35528__$1);

return statearr_35555;
})();
if(cljs.core.truth_(inst_35529)){
var statearr_35556_36819 = state_35546__$1;
(statearr_35556_36819[(1)] = (5));

} else {
var statearr_35557_36820 = state_35546__$1;
(statearr_35557_36820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (6))){
var inst_35528 = (state_35546[(7)]);
var inst_35533 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35528) : p.call(null, inst_35528));
var state_35546__$1 = state_35546;
if(cljs.core.truth_(inst_35533)){
var statearr_35558_36821 = state_35546__$1;
(statearr_35558_36821[(1)] = (8));

} else {
var statearr_35559_36822 = state_35546__$1;
(statearr_35559_36822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (3))){
var inst_35544 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35546__$1,inst_35544);
} else {
if((state_val_35547 === (2))){
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35546__$1,(4),ch);
} else {
if((state_val_35547 === (11))){
var inst_35536 = (state_35546[(2)]);
var state_35546__$1 = state_35546;
var statearr_35563_36824 = state_35546__$1;
(statearr_35563_36824[(2)] = inst_35536);

(statearr_35563_36824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (9))){
var state_35546__$1 = state_35546;
var statearr_35564_36826 = state_35546__$1;
(statearr_35564_36826[(2)] = null);

(statearr_35564_36826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (5))){
var inst_35531 = cljs.core.async.close_BANG_(out);
var state_35546__$1 = state_35546;
var statearr_35565_36832 = state_35546__$1;
(statearr_35565_36832[(2)] = inst_35531);

(statearr_35565_36832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (10))){
var inst_35539 = (state_35546[(2)]);
var state_35546__$1 = (function (){var statearr_35566 = state_35546;
(statearr_35566[(8)] = inst_35539);

return statearr_35566;
})();
var statearr_35567_36836 = state_35546__$1;
(statearr_35567_36836[(2)] = null);

(statearr_35567_36836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35547 === (8))){
var inst_35528 = (state_35546[(7)]);
var state_35546__$1 = state_35546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35546__$1,(11),out,inst_35528);
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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_35569 = [null,null,null,null,null,null,null,null,null];
(statearr_35569[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_35569[(1)] = (1));

return statearr_35569;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_35546){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35546);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35570){var ex__31765__auto__ = e35570;
var statearr_35571_36838 = state_35546;
(statearr_35571_36838[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35546[(4)]))){
var statearr_35572_36839 = state_35546;
(statearr_35572_36839[(1)] = cljs.core.first((state_35546[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36840 = state_35546;
state_35546 = G__36840;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_35546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_35546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35573 = f__32563__auto__();
(statearr_35573[(6)] = c__32561__auto___36811);

return statearr_35573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35576 = arguments.length;
switch (G__35576) {
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
var c__32561__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35641){
var state_val_35642 = (state_35641[(1)]);
if((state_val_35642 === (7))){
var inst_35637 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35643_36847 = state_35641__$1;
(statearr_35643_36847[(2)] = inst_35637);

(statearr_35643_36847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (20))){
var inst_35607 = (state_35641[(7)]);
var inst_35618 = (state_35641[(2)]);
var inst_35619 = cljs.core.next(inst_35607);
var inst_35593 = inst_35619;
var inst_35594 = null;
var inst_35595 = (0);
var inst_35596 = (0);
var state_35641__$1 = (function (){var statearr_35644 = state_35641;
(statearr_35644[(8)] = inst_35596);

(statearr_35644[(9)] = inst_35618);

(statearr_35644[(10)] = inst_35593);

(statearr_35644[(11)] = inst_35595);

(statearr_35644[(12)] = inst_35594);

return statearr_35644;
})();
var statearr_35645_36848 = state_35641__$1;
(statearr_35645_36848[(2)] = null);

(statearr_35645_36848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (1))){
var state_35641__$1 = state_35641;
var statearr_35647_36849 = state_35641__$1;
(statearr_35647_36849[(2)] = null);

(statearr_35647_36849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (4))){
var inst_35582 = (state_35641[(13)]);
var inst_35582__$1 = (state_35641[(2)]);
var inst_35583 = (inst_35582__$1 == null);
var state_35641__$1 = (function (){var statearr_35648 = state_35641;
(statearr_35648[(13)] = inst_35582__$1);

return statearr_35648;
})();
if(cljs.core.truth_(inst_35583)){
var statearr_35649_36853 = state_35641__$1;
(statearr_35649_36853[(1)] = (5));

} else {
var statearr_35650_36854 = state_35641__$1;
(statearr_35650_36854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (15))){
var state_35641__$1 = state_35641;
var statearr_35654_36855 = state_35641__$1;
(statearr_35654_36855[(2)] = null);

(statearr_35654_36855[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (21))){
var state_35641__$1 = state_35641;
var statearr_35655_36856 = state_35641__$1;
(statearr_35655_36856[(2)] = null);

(statearr_35655_36856[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (13))){
var inst_35596 = (state_35641[(8)]);
var inst_35593 = (state_35641[(10)]);
var inst_35595 = (state_35641[(11)]);
var inst_35594 = (state_35641[(12)]);
var inst_35603 = (state_35641[(2)]);
var inst_35604 = (inst_35596 + (1));
var tmp35651 = inst_35593;
var tmp35652 = inst_35595;
var tmp35653 = inst_35594;
var inst_35593__$1 = tmp35651;
var inst_35594__$1 = tmp35653;
var inst_35595__$1 = tmp35652;
var inst_35596__$1 = inst_35604;
var state_35641__$1 = (function (){var statearr_35656 = state_35641;
(statearr_35656[(8)] = inst_35596__$1);

(statearr_35656[(10)] = inst_35593__$1);

(statearr_35656[(11)] = inst_35595__$1);

(statearr_35656[(12)] = inst_35594__$1);

(statearr_35656[(14)] = inst_35603);

return statearr_35656;
})();
var statearr_35657_36859 = state_35641__$1;
(statearr_35657_36859[(2)] = null);

(statearr_35657_36859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (22))){
var state_35641__$1 = state_35641;
var statearr_35658_36861 = state_35641__$1;
(statearr_35658_36861[(2)] = null);

(statearr_35658_36861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (6))){
var inst_35582 = (state_35641[(13)]);
var inst_35591 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35582) : f.call(null, inst_35582));
var inst_35592 = cljs.core.seq(inst_35591);
var inst_35593 = inst_35592;
var inst_35594 = null;
var inst_35595 = (0);
var inst_35596 = (0);
var state_35641__$1 = (function (){var statearr_35664 = state_35641;
(statearr_35664[(8)] = inst_35596);

(statearr_35664[(10)] = inst_35593);

(statearr_35664[(11)] = inst_35595);

(statearr_35664[(12)] = inst_35594);

return statearr_35664;
})();
var statearr_35668_36864 = state_35641__$1;
(statearr_35668_36864[(2)] = null);

(statearr_35668_36864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (17))){
var inst_35607 = (state_35641[(7)]);
var inst_35611 = cljs.core.chunk_first(inst_35607);
var inst_35612 = cljs.core.chunk_rest(inst_35607);
var inst_35613 = cljs.core.count(inst_35611);
var inst_35593 = inst_35612;
var inst_35594 = inst_35611;
var inst_35595 = inst_35613;
var inst_35596 = (0);
var state_35641__$1 = (function (){var statearr_35669 = state_35641;
(statearr_35669[(8)] = inst_35596);

(statearr_35669[(10)] = inst_35593);

(statearr_35669[(11)] = inst_35595);

(statearr_35669[(12)] = inst_35594);

return statearr_35669;
})();
var statearr_35670_36868 = state_35641__$1;
(statearr_35670_36868[(2)] = null);

(statearr_35670_36868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (3))){
var inst_35639 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35641__$1,inst_35639);
} else {
if((state_val_35642 === (12))){
var inst_35627 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35672_36869 = state_35641__$1;
(statearr_35672_36869[(2)] = inst_35627);

(statearr_35672_36869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (2))){
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35641__$1,(4),in$);
} else {
if((state_val_35642 === (23))){
var inst_35635 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35673_36870 = state_35641__$1;
(statearr_35673_36870[(2)] = inst_35635);

(statearr_35673_36870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (19))){
var inst_35622 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35674_36871 = state_35641__$1;
(statearr_35674_36871[(2)] = inst_35622);

(statearr_35674_36871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (11))){
var inst_35593 = (state_35641[(10)]);
var inst_35607 = (state_35641[(7)]);
var inst_35607__$1 = cljs.core.seq(inst_35593);
var state_35641__$1 = (function (){var statearr_35677 = state_35641;
(statearr_35677[(7)] = inst_35607__$1);

return statearr_35677;
})();
if(inst_35607__$1){
var statearr_35678_36872 = state_35641__$1;
(statearr_35678_36872[(1)] = (14));

} else {
var statearr_35679_36875 = state_35641__$1;
(statearr_35679_36875[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (9))){
var inst_35629 = (state_35641[(2)]);
var inst_35630 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35641__$1 = (function (){var statearr_35680 = state_35641;
(statearr_35680[(15)] = inst_35629);

return statearr_35680;
})();
if(cljs.core.truth_(inst_35630)){
var statearr_35681_36877 = state_35641__$1;
(statearr_35681_36877[(1)] = (21));

} else {
var statearr_35682_36878 = state_35641__$1;
(statearr_35682_36878[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (5))){
var inst_35585 = cljs.core.async.close_BANG_(out);
var state_35641__$1 = state_35641;
var statearr_35683_36879 = state_35641__$1;
(statearr_35683_36879[(2)] = inst_35585);

(statearr_35683_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (14))){
var inst_35607 = (state_35641[(7)]);
var inst_35609 = cljs.core.chunked_seq_QMARK_(inst_35607);
var state_35641__$1 = state_35641;
if(inst_35609){
var statearr_35684_36880 = state_35641__$1;
(statearr_35684_36880[(1)] = (17));

} else {
var statearr_35685_36881 = state_35641__$1;
(statearr_35685_36881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (16))){
var inst_35625 = (state_35641[(2)]);
var state_35641__$1 = state_35641;
var statearr_35686_36883 = state_35641__$1;
(statearr_35686_36883[(2)] = inst_35625);

(statearr_35686_36883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35642 === (10))){
var inst_35596 = (state_35641[(8)]);
var inst_35594 = (state_35641[(12)]);
var inst_35601 = cljs.core._nth(inst_35594,inst_35596);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35641__$1,(13),out,inst_35601);
} else {
if((state_val_35642 === (18))){
var inst_35607 = (state_35641[(7)]);
var inst_35616 = cljs.core.first(inst_35607);
var state_35641__$1 = state_35641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35641__$1,(20),out,inst_35616);
} else {
if((state_val_35642 === (8))){
var inst_35596 = (state_35641[(8)]);
var inst_35595 = (state_35641[(11)]);
var inst_35598 = (inst_35596 < inst_35595);
var inst_35599 = inst_35598;
var state_35641__$1 = state_35641;
if(cljs.core.truth_(inst_35599)){
var statearr_35687_36884 = state_35641__$1;
(statearr_35687_36884[(1)] = (10));

} else {
var statearr_35688_36886 = state_35641__$1;
(statearr_35688_36886[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__31762__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31762__auto____0 = (function (){
var statearr_35689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35689[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31762__auto__);

(statearr_35689[(1)] = (1));

return statearr_35689;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31762__auto____1 = (function (state_35641){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35641);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35690){var ex__31765__auto__ = e35690;
var statearr_35691_36889 = state_35641;
(statearr_35691_36889[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35641[(4)]))){
var statearr_35692_36890 = state_35641;
(statearr_35692_36890[(1)] = cljs.core.first((state_35641[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36892 = state_35641;
state_35641 = G__36892;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31762__auto__ = function(state_35641){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31762__auto____1.call(this,state_35641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31762__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31762__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35693 = f__32563__auto__();
(statearr_35693[(6)] = c__32561__auto__);

return statearr_35693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));

return c__32561__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35695 = arguments.length;
switch (G__35695) {
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
var G__35697 = arguments.length;
switch (G__35697) {
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
var G__35703 = arguments.length;
switch (G__35703) {
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
var c__32561__auto___36906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35736){
var state_val_35737 = (state_35736[(1)]);
if((state_val_35737 === (7))){
var inst_35725 = (state_35736[(2)]);
var state_35736__$1 = state_35736;
var statearr_35738_36907 = state_35736__$1;
(statearr_35738_36907[(2)] = inst_35725);

(statearr_35738_36907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (1))){
var inst_35705 = null;
var state_35736__$1 = (function (){var statearr_35739 = state_35736;
(statearr_35739[(7)] = inst_35705);

return statearr_35739;
})();
var statearr_35740_36908 = state_35736__$1;
(statearr_35740_36908[(2)] = null);

(statearr_35740_36908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (4))){
var inst_35708 = (state_35736[(8)]);
var inst_35708__$1 = (state_35736[(2)]);
var inst_35711 = (inst_35708__$1 == null);
var inst_35712 = cljs.core.not(inst_35711);
var state_35736__$1 = (function (){var statearr_35741 = state_35736;
(statearr_35741[(8)] = inst_35708__$1);

return statearr_35741;
})();
if(inst_35712){
var statearr_35742_36910 = state_35736__$1;
(statearr_35742_36910[(1)] = (5));

} else {
var statearr_35743_36911 = state_35736__$1;
(statearr_35743_36911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (6))){
var state_35736__$1 = state_35736;
var statearr_35745_36912 = state_35736__$1;
(statearr_35745_36912[(2)] = null);

(statearr_35745_36912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (3))){
var inst_35727 = (state_35736[(2)]);
var inst_35728 = cljs.core.async.close_BANG_(out);
var state_35736__$1 = (function (){var statearr_35749 = state_35736;
(statearr_35749[(9)] = inst_35727);

return statearr_35749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35736__$1,inst_35728);
} else {
if((state_val_35737 === (2))){
var state_35736__$1 = state_35736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35736__$1,(4),ch);
} else {
if((state_val_35737 === (11))){
var inst_35708 = (state_35736[(8)]);
var inst_35719 = (state_35736[(2)]);
var inst_35705 = inst_35708;
var state_35736__$1 = (function (){var statearr_35750 = state_35736;
(statearr_35750[(10)] = inst_35719);

(statearr_35750[(7)] = inst_35705);

return statearr_35750;
})();
var statearr_35752_36913 = state_35736__$1;
(statearr_35752_36913[(2)] = null);

(statearr_35752_36913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (9))){
var inst_35708 = (state_35736[(8)]);
var state_35736__$1 = state_35736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35736__$1,(11),out,inst_35708);
} else {
if((state_val_35737 === (5))){
var inst_35705 = (state_35736[(7)]);
var inst_35708 = (state_35736[(8)]);
var inst_35714 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35708,inst_35705);
var state_35736__$1 = state_35736;
if(inst_35714){
var statearr_35757_36914 = state_35736__$1;
(statearr_35757_36914[(1)] = (8));

} else {
var statearr_35758_36915 = state_35736__$1;
(statearr_35758_36915[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (10))){
var inst_35722 = (state_35736[(2)]);
var state_35736__$1 = state_35736;
var statearr_35759_36916 = state_35736__$1;
(statearr_35759_36916[(2)] = inst_35722);

(statearr_35759_36916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35737 === (8))){
var inst_35705 = (state_35736[(7)]);
var tmp35756 = inst_35705;
var inst_35705__$1 = tmp35756;
var state_35736__$1 = (function (){var statearr_35760 = state_35736;
(statearr_35760[(7)] = inst_35705__$1);

return statearr_35760;
})();
var statearr_35761_36917 = state_35736__$1;
(statearr_35761_36917[(2)] = null);

(statearr_35761_36917[(1)] = (2));


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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_35762 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35762[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_35762[(1)] = (1));

return statearr_35762;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_35736){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35736);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35764){var ex__31765__auto__ = e35764;
var statearr_35765_36918 = state_35736;
(statearr_35765_36918[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35736[(4)]))){
var statearr_35766_36919 = state_35736;
(statearr_35766_36919[(1)] = cljs.core.first((state_35736[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36920 = state_35736;
state_35736 = G__36920;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_35736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_35736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35767 = f__32563__auto__();
(statearr_35767[(6)] = c__32561__auto___36906);

return statearr_35767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35778 = arguments.length;
switch (G__35778) {
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
var c__32561__auto___36922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35827){
var state_val_35828 = (state_35827[(1)]);
if((state_val_35828 === (7))){
var inst_35818 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
var statearr_35845_36924 = state_35827__$1;
(statearr_35845_36924[(2)] = inst_35818);

(statearr_35845_36924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (1))){
var inst_35780 = (new Array(n));
var inst_35781 = inst_35780;
var inst_35782 = (0);
var state_35827__$1 = (function (){var statearr_35855 = state_35827;
(statearr_35855[(7)] = inst_35781);

(statearr_35855[(8)] = inst_35782);

return statearr_35855;
})();
var statearr_35856_36925 = state_35827__$1;
(statearr_35856_36925[(2)] = null);

(statearr_35856_36925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (4))){
var inst_35785 = (state_35827[(9)]);
var inst_35785__$1 = (state_35827[(2)]);
var inst_35786 = (inst_35785__$1 == null);
var inst_35787 = cljs.core.not(inst_35786);
var state_35827__$1 = (function (){var statearr_35860 = state_35827;
(statearr_35860[(9)] = inst_35785__$1);

return statearr_35860;
})();
if(inst_35787){
var statearr_35861_36928 = state_35827__$1;
(statearr_35861_36928[(1)] = (5));

} else {
var statearr_35862_36929 = state_35827__$1;
(statearr_35862_36929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (15))){
var inst_35812 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
var statearr_35863_36932 = state_35827__$1;
(statearr_35863_36932[(2)] = inst_35812);

(statearr_35863_36932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (13))){
var state_35827__$1 = state_35827;
var statearr_35864_36933 = state_35827__$1;
(statearr_35864_36933[(2)] = null);

(statearr_35864_36933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (6))){
var inst_35782 = (state_35827[(8)]);
var inst_35808 = (inst_35782 > (0));
var state_35827__$1 = state_35827;
if(cljs.core.truth_(inst_35808)){
var statearr_35865_36934 = state_35827__$1;
(statearr_35865_36934[(1)] = (12));

} else {
var statearr_35866_36935 = state_35827__$1;
(statearr_35866_36935[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (3))){
var inst_35820 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35827__$1,inst_35820);
} else {
if((state_val_35828 === (12))){
var inst_35781 = (state_35827[(7)]);
var inst_35810 = cljs.core.vec(inst_35781);
var state_35827__$1 = state_35827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35827__$1,(15),out,inst_35810);
} else {
if((state_val_35828 === (2))){
var state_35827__$1 = state_35827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35827__$1,(4),ch);
} else {
if((state_val_35828 === (11))){
var inst_35802 = (state_35827[(2)]);
var inst_35803 = (new Array(n));
var inst_35781 = inst_35803;
var inst_35782 = (0);
var state_35827__$1 = (function (){var statearr_35870 = state_35827;
(statearr_35870[(10)] = inst_35802);

(statearr_35870[(7)] = inst_35781);

(statearr_35870[(8)] = inst_35782);

return statearr_35870;
})();
var statearr_35871_36936 = state_35827__$1;
(statearr_35871_36936[(2)] = null);

(statearr_35871_36936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (9))){
var inst_35781 = (state_35827[(7)]);
var inst_35800 = cljs.core.vec(inst_35781);
var state_35827__$1 = state_35827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35827__$1,(11),out,inst_35800);
} else {
if((state_val_35828 === (5))){
var inst_35781 = (state_35827[(7)]);
var inst_35790 = (state_35827[(11)]);
var inst_35782 = (state_35827[(8)]);
var inst_35785 = (state_35827[(9)]);
var inst_35789 = (inst_35781[inst_35782] = inst_35785);
var inst_35790__$1 = (inst_35782 + (1));
var inst_35791 = (inst_35790__$1 < n);
var state_35827__$1 = (function (){var statearr_35872 = state_35827;
(statearr_35872[(11)] = inst_35790__$1);

(statearr_35872[(12)] = inst_35789);

return statearr_35872;
})();
if(cljs.core.truth_(inst_35791)){
var statearr_35876_36940 = state_35827__$1;
(statearr_35876_36940[(1)] = (8));

} else {
var statearr_35877_36941 = state_35827__$1;
(statearr_35877_36941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (14))){
var inst_35815 = (state_35827[(2)]);
var inst_35816 = cljs.core.async.close_BANG_(out);
var state_35827__$1 = (function (){var statearr_35879 = state_35827;
(statearr_35879[(13)] = inst_35815);

return statearr_35879;
})();
var statearr_35880_36942 = state_35827__$1;
(statearr_35880_36942[(2)] = inst_35816);

(statearr_35880_36942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (10))){
var inst_35806 = (state_35827[(2)]);
var state_35827__$1 = state_35827;
var statearr_35881_36943 = state_35827__$1;
(statearr_35881_36943[(2)] = inst_35806);

(statearr_35881_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35828 === (8))){
var inst_35781 = (state_35827[(7)]);
var inst_35790 = (state_35827[(11)]);
var tmp35878 = inst_35781;
var inst_35781__$1 = tmp35878;
var inst_35782 = inst_35790;
var state_35827__$1 = (function (){var statearr_35882 = state_35827;
(statearr_35882[(7)] = inst_35781__$1);

(statearr_35882[(8)] = inst_35782);

return statearr_35882;
})();
var statearr_35883_36944 = state_35827__$1;
(statearr_35883_36944[(2)] = null);

(statearr_35883_36944[(1)] = (2));


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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_35884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35884[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_35884[(1)] = (1));

return statearr_35884;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_35827){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35827);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e35885){var ex__31765__auto__ = e35885;
var statearr_35886_36945 = state_35827;
(statearr_35886_36945[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35827[(4)]))){
var statearr_35887_36946 = state_35827;
(statearr_35887_36946[(1)] = cljs.core.first((state_35827[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36947 = state_35827;
state_35827 = G__36947;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_35827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_35827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_35888 = f__32563__auto__();
(statearr_35888[(6)] = c__32561__auto___36922);

return statearr_35888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35890 = arguments.length;
switch (G__35890) {
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
var c__32561__auto___36949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32563__auto__ = (function (){var switch__31761__auto__ = (function (state_35952){
var state_val_35953 = (state_35952[(1)]);
if((state_val_35953 === (7))){
var inst_35948 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_35960_36950 = state_35952__$1;
(statearr_35960_36950[(2)] = inst_35948);

(statearr_35960_36950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (1))){
var inst_35908 = [];
var inst_35909 = inst_35908;
var inst_35910 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35952__$1 = (function (){var statearr_35961 = state_35952;
(statearr_35961[(7)] = inst_35909);

(statearr_35961[(8)] = inst_35910);

return statearr_35961;
})();
var statearr_35962_36952 = state_35952__$1;
(statearr_35962_36952[(2)] = null);

(statearr_35962_36952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (4))){
var inst_35913 = (state_35952[(9)]);
var inst_35913__$1 = (state_35952[(2)]);
var inst_35914 = (inst_35913__$1 == null);
var inst_35915 = cljs.core.not(inst_35914);
var state_35952__$1 = (function (){var statearr_35963 = state_35952;
(statearr_35963[(9)] = inst_35913__$1);

return statearr_35963;
})();
if(inst_35915){
var statearr_35965_36953 = state_35952__$1;
(statearr_35965_36953[(1)] = (5));

} else {
var statearr_35966_36954 = state_35952__$1;
(statearr_35966_36954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (15))){
var inst_35909 = (state_35952[(7)]);
var inst_35940 = cljs.core.vec(inst_35909);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35952__$1,(18),out,inst_35940);
} else {
if((state_val_35953 === (13))){
var inst_35935 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_35970_36955 = state_35952__$1;
(statearr_35970_36955[(2)] = inst_35935);

(statearr_35970_36955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (6))){
var inst_35909 = (state_35952[(7)]);
var inst_35937 = inst_35909.length;
var inst_35938 = (inst_35937 > (0));
var state_35952__$1 = state_35952;
if(cljs.core.truth_(inst_35938)){
var statearr_35971_36957 = state_35952__$1;
(statearr_35971_36957[(1)] = (15));

} else {
var statearr_35972_36958 = state_35952__$1;
(statearr_35972_36958[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (17))){
var inst_35945 = (state_35952[(2)]);
var inst_35946 = cljs.core.async.close_BANG_(out);
var state_35952__$1 = (function (){var statearr_35973 = state_35952;
(statearr_35973[(10)] = inst_35945);

return statearr_35973;
})();
var statearr_35974_36959 = state_35952__$1;
(statearr_35974_36959[(2)] = inst_35946);

(statearr_35974_36959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (3))){
var inst_35950 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35952__$1,inst_35950);
} else {
if((state_val_35953 === (12))){
var inst_35909 = (state_35952[(7)]);
var inst_35928 = cljs.core.vec(inst_35909);
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35952__$1,(14),out,inst_35928);
} else {
if((state_val_35953 === (2))){
var state_35952__$1 = state_35952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35952__$1,(4),ch);
} else {
if((state_val_35953 === (11))){
var inst_35917 = (state_35952[(11)]);
var inst_35909 = (state_35952[(7)]);
var inst_35913 = (state_35952[(9)]);
var inst_35925 = inst_35909.push(inst_35913);
var tmp35975 = inst_35909;
var inst_35909__$1 = tmp35975;
var inst_35910 = inst_35917;
var state_35952__$1 = (function (){var statearr_35982 = state_35952;
(statearr_35982[(7)] = inst_35909__$1);

(statearr_35982[(12)] = inst_35925);

(statearr_35982[(8)] = inst_35910);

return statearr_35982;
})();
var statearr_35983_36963 = state_35952__$1;
(statearr_35983_36963[(2)] = null);

(statearr_35983_36963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (9))){
var inst_35910 = (state_35952[(8)]);
var inst_35921 = cljs.core.keyword_identical_QMARK_(inst_35910,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35952__$1 = state_35952;
var statearr_35986_36965 = state_35952__$1;
(statearr_35986_36965[(2)] = inst_35921);

(statearr_35986_36965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (5))){
var inst_35917 = (state_35952[(11)]);
var inst_35918 = (state_35952[(13)]);
var inst_35913 = (state_35952[(9)]);
var inst_35910 = (state_35952[(8)]);
var inst_35917__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35913) : f.call(null, inst_35913));
var inst_35918__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35917__$1,inst_35910);
var state_35952__$1 = (function (){var statearr_35987 = state_35952;
(statearr_35987[(11)] = inst_35917__$1);

(statearr_35987[(13)] = inst_35918__$1);

return statearr_35987;
})();
if(inst_35918__$1){
var statearr_35988_36966 = state_35952__$1;
(statearr_35988_36966[(1)] = (8));

} else {
var statearr_35989_36967 = state_35952__$1;
(statearr_35989_36967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (14))){
var inst_35917 = (state_35952[(11)]);
var inst_35913 = (state_35952[(9)]);
var inst_35930 = (state_35952[(2)]);
var inst_35931 = [];
var inst_35932 = inst_35931.push(inst_35913);
var inst_35909 = inst_35931;
var inst_35910 = inst_35917;
var state_35952__$1 = (function (){var statearr_35993 = state_35952;
(statearr_35993[(14)] = inst_35932);

(statearr_35993[(7)] = inst_35909);

(statearr_35993[(8)] = inst_35910);

(statearr_35993[(15)] = inst_35930);

return statearr_35993;
})();
var statearr_35996_36968 = state_35952__$1;
(statearr_35996_36968[(2)] = null);

(statearr_35996_36968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (16))){
var state_35952__$1 = state_35952;
var statearr_35998_36969 = state_35952__$1;
(statearr_35998_36969[(2)] = null);

(statearr_35998_36969[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (10))){
var inst_35923 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
if(cljs.core.truth_(inst_35923)){
var statearr_35999_36971 = state_35952__$1;
(statearr_35999_36971[(1)] = (11));

} else {
var statearr_36000_36972 = state_35952__$1;
(statearr_36000_36972[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (18))){
var inst_35942 = (state_35952[(2)]);
var state_35952__$1 = state_35952;
var statearr_36007_36973 = state_35952__$1;
(statearr_36007_36973[(2)] = inst_35942);

(statearr_36007_36973[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35953 === (8))){
var inst_35918 = (state_35952[(13)]);
var state_35952__$1 = state_35952;
var statearr_36010_36974 = state_35952__$1;
(statearr_36010_36974[(2)] = inst_35918);

(statearr_36010_36974[(1)] = (10));


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
var cljs$core$async$state_machine__31762__auto__ = null;
var cljs$core$async$state_machine__31762__auto____0 = (function (){
var statearr_36017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36017[(0)] = cljs$core$async$state_machine__31762__auto__);

(statearr_36017[(1)] = (1));

return statearr_36017;
});
var cljs$core$async$state_machine__31762__auto____1 = (function (state_35952){
while(true){
var ret_value__31763__auto__ = (function (){try{while(true){
var result__31764__auto__ = switch__31761__auto__(state_35952);
if(cljs.core.keyword_identical_QMARK_(result__31764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31764__auto__;
}
break;
}
}catch (e36018){var ex__31765__auto__ = e36018;
var statearr_36019_36975 = state_35952;
(statearr_36019_36975[(2)] = ex__31765__auto__);


if(cljs.core.seq((state_35952[(4)]))){
var statearr_36020_36976 = state_35952;
(statearr_36020_36976[(1)] = cljs.core.first((state_35952[(4)])));

} else {
throw ex__31765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36977 = state_35952;
state_35952 = G__36977;
continue;
} else {
return ret_value__31763__auto__;
}
break;
}
});
cljs$core$async$state_machine__31762__auto__ = function(state_35952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31762__auto____1.call(this,state_35952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31762__auto____0;
cljs$core$async$state_machine__31762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31762__auto____1;
return cljs$core$async$state_machine__31762__auto__;
})()
})();
var state__32564__auto__ = (function (){var statearr_36021 = f__32563__auto__();
(statearr_36021[(6)] = c__32561__auto___36949);

return statearr_36021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32564__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
