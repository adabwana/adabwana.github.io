goog.provide('reitit.trie');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k35364,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__35371 = k35364;
var G__35371__$1 = (((G__35371 instanceof cljs.core.Keyword))?G__35371.fqn:null);
switch (G__35371__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35364,else__5303__auto__);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__35376){
var vec__35377 = p__35376;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35377,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.trie.Wild{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35363){
var self__ = this;
var G__35363__$1 = this;
return (new cljs.core.RecordIter((0),G__35363__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35366,other35367){
var self__ = this;
var this35366__$1 = this;
return (((!((other35367 == null)))) && ((((this35366__$1.constructor === other35367.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35366__$1.value,other35367.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35366__$1.__extmap,other35367.__extmap)))))));
}));

(reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k35364){
var self__ = this;
var this__5307__auto____$1 = this;
var G__35387 = k35364;
var G__35387__$1 = (((G__35387 instanceof cljs.core.Keyword))?G__35387.fqn:null);
switch (G__35387__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35364);

}
}));

(reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__35363){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__35392 = cljs.core.keyword_identical_QMARK_;
var expr__35393 = k__5309__auto__;
if(cljs.core.truth_((pred__35392.cljs$core$IFn$_invoke$arity$2 ? pred__35392.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__35393) : pred__35392.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__35393)))){
return (new reitit.trie.Wild(G__35363,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__35363),null));
}
}));

(reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__35363){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__35363,self__.__extmap,self__.__hash));
}));

(reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.Wild.cljs$lang$type = true);

(reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
}));

(reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.trie/Wild");
}));

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__35369){
var extmap__5342__auto__ = (function (){var G__35397 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35369,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__35369)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35397);
} else {
return G__35397;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__35369),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k35399,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__35404 = k35399;
var G__35404__$1 = (((G__35404 instanceof cljs.core.Keyword))?G__35404.fqn:null);
switch (G__35404__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35399,else__5303__auto__);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__35407){
var vec__35410 = p__35407;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35410,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.trie.CatchAll{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35398){
var self__ = this;
var G__35398__$1 = this;
return (new cljs.core.RecordIter((0),G__35398__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35400,other35401){
var self__ = this;
var this35400__$1 = this;
return (((!((other35401 == null)))) && ((((this35400__$1.constructor === other35401.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35400__$1.value,other35401.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35400__$1.__extmap,other35401.__extmap)))))));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k35399){
var self__ = this;
var this__5307__auto____$1 = this;
var G__35428 = k35399;
var G__35428__$1 = (((G__35428 instanceof cljs.core.Keyword))?G__35428.fqn:null);
switch (G__35428__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35399);

}
}));

(reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__35398){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__35439 = cljs.core.keyword_identical_QMARK_;
var expr__35440 = k__5309__auto__;
if(cljs.core.truth_((pred__35439.cljs$core$IFn$_invoke$arity$2 ? pred__35439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__35440) : pred__35439.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__35440)))){
return (new reitit.trie.CatchAll(G__35398,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__35398),null));
}
}));

(reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__35398){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__35398,self__.__extmap,self__.__hash));
}));

(reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(reitit.trie.CatchAll.cljs$lang$type = true);

(reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
}));

(reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.trie/CatchAll");
}));

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__35402){
var extmap__5342__auto__ = (function (){var G__35448 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35402,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__35402)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35448);
} else {
return G__35448;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__35402),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k35450,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__35457 = k35450;
var G__35457__$1 = (((G__35457 instanceof cljs.core.Keyword))?G__35457.fqn:null);
switch (G__35457__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35450,else__5303__auto__);

}
}));

(reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__35460){
var vec__35461 = p__35460;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35461,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.trie.Match{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35449){
var self__ = this;
var G__35449__$1 = this;
return (new cljs.core.RecordIter((0),G__35449__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35451,other35452){
var self__ = this;
var this35451__$1 = this;
return (((!((other35452 == null)))) && ((((this35451__$1.constructor === other35452.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35451__$1.params,other35452.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35451__$1.data,other35452.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35451__$1.__extmap,other35452.__extmap)))))))));
}));

(reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k35450){
var self__ = this;
var this__5307__auto____$1 = this;
var G__35470 = k35450;
var G__35470__$1 = (((G__35470 instanceof cljs.core.Keyword))?G__35470.fqn:null);
switch (G__35470__$1) {
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35450);

}
}));

(reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__35449){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__35472 = cljs.core.keyword_identical_QMARK_;
var expr__35473 = k__5309__auto__;
if(cljs.core.truth_((pred__35472.cljs$core$IFn$_invoke$arity$2 ? pred__35472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__35473) : pred__35472.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__35473)))){
return (new reitit.trie.Match(G__35449,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35472.cljs$core$IFn$_invoke$arity$2 ? pred__35472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__35473) : pred__35472.call(null, new cljs.core.Keyword(null,"data","data",-232669377),expr__35473)))){
return (new reitit.trie.Match(self__.params,G__35449,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__35449),null));
}
}
}));

(reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__35449){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__35449,self__.__extmap,self__.__hash));
}));

(reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Match.cljs$lang$type = true);

(reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
}));

(reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.trie/Match");
}));

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__35454){
var extmap__5342__auto__ = (function (){var G__35477 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35454,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__35454)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35477);
} else {
return G__35477;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__35454),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__35454),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k35480,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__35489 = k35480;
var G__35489__$1 = (((G__35489 instanceof cljs.core.Keyword))?G__35489.fqn:null);
switch (G__35489__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35480,else__5303__auto__);

}
}));

(reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__35494){
var vec__35495 = p__35494;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35495,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35495,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#reitit.trie.Node{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35479){
var self__ = this;
var G__35479__$1 = this;
return (new cljs.core.RecordIter((0),G__35479__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35481,other35482){
var self__ = this;
var this35481__$1 = this;
return (((!((other35482 == null)))) && ((((this35481__$1.constructor === other35482.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35481__$1.children,other35482.children)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35481__$1.wilds,other35482.wilds)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35481__$1.catch_all,other35482.catch_all)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35481__$1.params,other35482.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35481__$1.data,other35482.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35481__$1.__extmap,other35482.__extmap)))))))))))))));
}));

(reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k35480){
var self__ = this;
var this__5307__auto____$1 = this;
var G__35509 = k35480;
var G__35509__$1 = (((G__35509 instanceof cljs.core.Keyword))?G__35509.fqn:null);
switch (G__35509__$1) {
case "children":
case "wilds":
case "catch-all":
case "params":
case "data":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35480);

}
}));

(reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__35479){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__35511 = cljs.core.keyword_identical_QMARK_;
var expr__35512 = k__5309__auto__;
if(cljs.core.truth_((pred__35511.cljs$core$IFn$_invoke$arity$2 ? pred__35511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__35512) : pred__35511.call(null, new cljs.core.Keyword(null,"children","children",-940561982),expr__35512)))){
return (new reitit.trie.Node(G__35479,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35511.cljs$core$IFn$_invoke$arity$2 ? pred__35511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__35512) : pred__35511.call(null, new cljs.core.Keyword(null,"wilds","wilds",132271223),expr__35512)))){
return (new reitit.trie.Node(self__.children,G__35479,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35511.cljs$core$IFn$_invoke$arity$2 ? pred__35511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__35512) : pred__35511.call(null, new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),expr__35512)))){
return (new reitit.trie.Node(self__.children,self__.wilds,G__35479,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35511.cljs$core$IFn$_invoke$arity$2 ? pred__35511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__35512) : pred__35511.call(null, new cljs.core.Keyword(null,"params","params",710516235),expr__35512)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__35479,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35511.cljs$core$IFn$_invoke$arity$2 ? pred__35511.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__35512) : pred__35511.call(null, new cljs.core.Keyword(null,"data","data",-232669377),expr__35512)))){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__35479,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__35479),null));
}
}
}
}
}
}));

(reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
}));

(reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__35479){
var self__ = this;
var this__5299__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__35479,self__.__extmap,self__.__hash));
}));

(reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
}));

(reitit.trie.Node.cljs$lang$type = true);

(reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
}));

(reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"reitit.trie/Node");
}));

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__35485){
var extmap__5342__auto__ = (function (){var G__35520 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35485,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__35485)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35520);
} else {
return G__35520;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__35485),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__35485),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__35485),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__35485),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__35485),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

var reitit$trie$Matcher$match$dyn_36433 = (function (this$,i,max,path){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.match[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__5351__auto__.call(null, this$,i,max,path));
} else {
var m__5349__auto__ = (reitit.trie.match["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__5349__auto__.call(null, this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
});
reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
return reitit$trie$Matcher$match$dyn_36433(this$,i,max,path);
}
});

var reitit$trie$Matcher$view$dyn_36440 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.view[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.trie.view["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
});
reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
return reitit$trie$Matcher$view$dyn_36440(this$);
}
});

var reitit$trie$Matcher$depth$dyn_36446 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.depth[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.trie.depth["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
});
reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
return reitit$trie$Matcher$depth$dyn_36446(this$);
}
});

var reitit$trie$Matcher$length$dyn_36450 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.length[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (reitit.trie.length["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
});
reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
return reitit$trie$Matcher$length$dyn_36450(this$);
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

var reitit$trie$TrieCompiler$data_matcher$dyn_36455 = (function (this$,params,data){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__5351__auto__.call(null, this$,params,data));
} else {
var m__5349__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__5349__auto__.call(null, this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
});
reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
return reitit$trie$TrieCompiler$data_matcher$dyn_36455(this$,params,data);
}
});

var reitit$trie$TrieCompiler$static_matcher$dyn_36461 = (function (this$,path,matcher){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__5351__auto__.call(null, this$,path,matcher));
} else {
var m__5349__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__5349__auto__.call(null, this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
});
reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
return reitit$trie$TrieCompiler$static_matcher$dyn_36461(this$,path,matcher);
}
});

var reitit$trie$TrieCompiler$wild_matcher$dyn_36471 = (function (this$,key,end,matcher){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__5351__auto__.call(null, this$,key,end,matcher));
} else {
var m__5349__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__5349__auto__.call(null, this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
});
reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
return reitit$trie$TrieCompiler$wild_matcher$dyn_36471(this$,key,end,matcher);
}
});

var reitit$trie$TrieCompiler$catch_all_matcher$dyn_36477 = (function (this$,key,params,data){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__5351__auto__.call(null, this$,key,params,data));
} else {
var m__5349__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__5349__auto__.call(null, this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
});
reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
return reitit$trie$TrieCompiler$catch_all_matcher$dyn_36477(this$,key,params,data);
}
});

var reitit$trie$TrieCompiler$linear_matcher$dyn_36483 = (function (this$,matchers,ordered_QMARK_){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__5351__auto__.call(null, this$,matchers,ordered_QMARK_));
} else {
var m__5349__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__5349__auto__.call(null, this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
});
reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
return reitit$trie$TrieCompiler$linear_matcher$dyn_36483(this$,matchers,ordered_QMARK_);
}
});

var reitit$trie$TrieCompiler$_pretty$dyn_36487 = (function (this$,matcher){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie._pretty[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5351__auto__.call(null, this$,matcher));
} else {
var m__5349__auto__ = (reitit.trie._pretty["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5349__auto__.call(null, this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
});
reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_pretty$dyn_36487(this$,matcher);
}
});

var reitit$trie$TrieCompiler$_path_matcher$dyn_36490 = (function (this$,matcher){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5351__auto__.call(null, this$,matcher));
} else {
var m__5349__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__5349__auto__.call(null, this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
});
reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
return reitit$trie$TrieCompiler$_path_matcher$dyn_36490(this$,matcher);
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__5090__auto__ = cljs.core.count(s1);
var y__5091__auto__ = cljs.core.count(s2);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__36496 = (i + (1));
i = G__36496;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5821__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5821__auto__)){
var i = temp__5821__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__35675){
var map__35676 = p__35675;
var map__35676__$1 = cljs.core.__destructure_map(map__35676);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35676__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});
var _wild = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var _catch_all = (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__5000__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__5000__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5002__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__36511 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__36512 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__36513 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__36511;
from = G__36512;
to = G__36513;
continue;
} else {
var G__36515 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__36516 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__36517 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__36515;
from = G__36516;
to = G__36517;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__5000__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__5002__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__36519 = ss;
var G__36520 = from;
var G__36521 = (to + (1));
ss = G__36519;
from = G__36520;
to = G__36521;
continue;
} else {
var G__36525 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__36526 = cljs.core.long$(to_SINGLEQUOTE_);
var G__36527 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__36525;
from = G__36526;
to = G__36527;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__5000__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__36530 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__36531 = cljs.core.long$(to_SINGLEQUOTE_);
var G__36532 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__36530;
from = G__36531;
to = G__36532;
continue;
} else {
var G__36533 = ss;
var G__36534 = from;
var G__36535 = (to + (1));
ss = G__36533;
from = G__36534;
to = G__36535;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.value),(1)),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__35709,p__35710){
var vec__35730 = p__35709;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35730,(0),null);
var p1s = vec__35730;
var vec__35733 = p__35710;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35733,(0),null);
var p2s = vec__35733;
var _split = (function (p){
var temp__5821__auto__ = (function (){var and__5000__auto__ = p;
if(cljs.core.truth_(and__5000__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var i = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});
var _slash = (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});
var _postcut = (function (p__35744){
var vec__35746 = p__35744;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35746,(0),null);
var pps = vec__35746;
var i = (function (){var and__5000__auto__ = p;
if(cljs.core.truth_(and__5000__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = i;
if(cljs.core.truth_(and__5000__auto__)){
return (i > (0));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});
var _tailcut = (function (cp,p__35751){
var vec__35753 = p__35751;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35753,(0),null);
var ps = vec__35753;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5821__auto__ = (function (){var and__5000__auto__ = typeof p1 === 'string';
if(and__5000__auto__){
var and__5000__auto____$1 = typeof p2 === 'string';
if(and__5000__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var cp = temp__5821__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_parts_QMARK_ = (function reitit$trie$conflicting_parts_QMARK_(parts1,parts2){
while(true){
var vec__35768 = reitit.trie._slice_start(parts1,parts2);
var vec__35771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(0),null);
var seq__35772 = cljs.core.seq(vec__35771);
var first__35773 = cljs.core.first(seq__35772);
var seq__35772__$1 = cljs.core.next(seq__35772);
var s1 = first__35773;
var ss1 = seq__35772__$1;
var vec__35774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35768,(1),null);
var seq__35775 = cljs.core.seq(vec__35774);
var first__35776 = cljs.core.first(seq__35775);
var seq__35775__$1 = cljs.core.next(seq__35775);
var s2 = first__35776;
var ss2 = seq__35775__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__36561 = reitit.trie._slice_end(s1,ss1);
var G__36562 = reitit.trie._slice_end(s2,ss2);
parts1 = G__36561;
parts2 = G__36562;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__36564 = ss1;
var G__36565 = ss2;
parts1 = G__36564;
parts2 = G__36565;
continue;

}
}
}
}
}
break;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
return reitit.trie.conflicting_parts_QMARK_(reitit.trie.split_path(path1,opts),reitit.trie.split_path(path2,opts));
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__35792,fp,params,data){
var vec__35794 = p__35792;
var seq__35795 = cljs.core.seq(vec__35794);
var first__35796 = cljs.core.first(seq__35795);
var seq__35795__$1 = cljs.core.next(seq__35795);
var path = first__35796;
var ps = seq__35795__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),(function (n){
var G__35822 = (function (){var or__5002__auto__ = n;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__35823 = ps;
var G__35824 = fp;
var G__35825 = params;
var G__35826 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__35822,G__35823,G__35824,G__35825,G__35826) : reitit.trie._insert.call(null, G__35822,G__35823,G__35824,G__35825,G__35826));
}));
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((cljs.core.empty_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null, node,ps,fp,params,data)):(function (){var or__5002__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p__35830){
var vec__35831 = p__35830;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35831,(1),null);
var temp__5821__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5821__auto__)){
var cp = temp__5821__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__35834 = n;
var G__35835 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__35836 = fp;
var G__35837 = params;
var G__35838 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__35834,G__35835,G__35836,G__35837,G__35838) : reitit.trie._insert.call(null, G__35834,G__35835,G__35836,G__35837,G__35838));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,((cp).length));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,((cp).length));
var n_SINGLEQUOTE_ = (function (){var G__35839 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__35840 = ps;
var G__35841 = fp;
var G__35842 = params;
var G__35843 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__35839,G__35840,G__35841,G__35842,G__35843) : reitit.trie._insert.call(null, G__35839,G__35840,G__35841,G__35842,G__35843));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__35844 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__35846 = null;
var G__35847 = null;
var G__35848 = null;
var G__35849 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__35844,G__35846,G__35847,G__35848,G__35849) : reitit.trie._insert.call(null, G__35844,G__35846,G__35847,G__35848,G__35849));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
})));
}
} else {
return null;
}
}),null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__35850 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__35851 = ps;
var G__35852 = fp;
var G__35853 = params;
var G__35854 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__35850,G__35851,G__35852,G__35853,G__35854) : reitit.trie._insert.call(null, G__35850,G__35851,G__35852,G__35853,G__35854));
})());
}
})()
))));
var temp__5821__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child], 0)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie35873 = (function (meta35868,_,params,data,match,meta35874){
this.meta35868 = meta35868;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta35874 = meta35874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie35873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35875,meta35874__$1){
var self__ = this;
var _35875__$1 = this;
return (new reitit.trie.t_reitit$trie35873(self__.meta35868,self__._,self__.params,self__.data,self__.match,meta35874__$1));
}));

(reitit.trie.t_reitit$trie35873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35875){
var self__ = this;
var _35875__$1 = this;
return self__.meta35874;
}));

(reitit.trie.t_reitit$trie35873.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie35873.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie35873.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
}));

(reitit.trie.t_reitit$trie35873.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie35873.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie35873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35868","meta35868",2059941867,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie35867","reitit.trie/t_reitit$trie35867",1001888451,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta35874","meta35874",-691459267,null)], null);
}));

(reitit.trie.t_reitit$trie35873.cljs$lang$type = true);

(reitit.trie.t_reitit$trie35873.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie35873");

(reitit.trie.t_reitit$trie35873.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.trie/t_reitit$trie35873");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie35873.
 */
reitit.trie.__GT_t_reitit$trie35873 = (function reitit$trie$__GT_t_reitit$trie35873(meta35868,_,params,data,match,meta35874){
return (new reitit.trie.t_reitit$trie35873(meta35868,_,params,data,match,meta35874));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie35891 = (function (meta35868,_,path,matcher,size,meta35892){
this.meta35868 = meta35868;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta35892 = meta35892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie35891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35893,meta35892__$1){
var self__ = this;
var _35893__$1 = this;
return (new reitit.trie.t_reitit$trie35891(self__.meta35868,self__._,self__.path,self__.matcher,self__.size,meta35892__$1));
}));

(reitit.trie.t_reitit$trie35891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35893){
var self__ = this;
var _35893__$1 = this;
return self__.meta35892;
}));

(reitit.trie.t_reitit$trie35891.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie35891.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__36615 = (j + (1));
j = G__36615;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie35891.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie35891.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie35891.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
}));

(reitit.trie.t_reitit$trie35891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35868","meta35868",2059941867,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie35867","reitit.trie/t_reitit$trie35867",1001888451,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta35892","meta35892",-420144418,null)], null);
}));

(reitit.trie.t_reitit$trie35891.cljs$lang$type = true);

(reitit.trie.t_reitit$trie35891.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie35891");

(reitit.trie.t_reitit$trie35891.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.trie/t_reitit$trie35891");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie35891.
 */
reitit.trie.__GT_t_reitit$trie35891 = (function reitit$trie$__GT_t_reitit$trie35891(meta35868,_,path,matcher,size,meta35892){
return (new reitit.trie.t_reitit$trie35891(meta35868,_,path,matcher,size,meta35892));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie35967 = (function (meta35868,_,key,end,matcher,meta35968){
this.meta35868 = meta35868;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta35968 = meta35968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie35967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35969,meta35968__$1){
var self__ = this;
var _35969__$1 = this;
return (new reitit.trie.t_reitit$trie35967(self__.meta35868,self__._,self__.key,self__.end,self__.matcher,meta35968__$1));
}));

(reitit.trie.t_reitit$trie35967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35969){
var self__ = this;
var _35969__$1 = this;
return self__.meta35968;
}));

(reitit.trie.t_reitit$trie35967.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie35967.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5821__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__35990 = cljs.core._EQ_;
var expr__35991 = c;
if(cljs.core.truth_((pred__35990.cljs$core$IFn$_invoke$arity$2 ? pred__35990.cljs$core$IFn$_invoke$arity$2(self__.end,expr__35991) : pred__35990.call(null, self__.end,expr__35991)))){
var temp__5821__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__35994 = "%";
var G__35995 = expr__35991;
return (pred__35990.cljs$core$IFn$_invoke$arity$2 ? pred__35990.cljs$core$IFn$_invoke$arity$2(G__35994,G__35995) : pred__35990.call(null, G__35994,G__35995));
})())){
var G__36626 = true;
var G__36627 = (j + (1));
percent_QMARK_ = G__36626;
j = G__36627;
continue;
} else {
var G__36630 = percent_QMARK_;
var G__36631 = (j + (1));
percent_QMARK_ = G__36630;
j = G__36631;
continue;
}
}
}
break;
}
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie35967.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
}));

(reitit.trie.t_reitit$trie35967.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
}));

(reitit.trie.t_reitit$trie35967.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie35967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35868","meta35868",2059941867,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie35867","reitit.trie/t_reitit$trie35867",1001888451,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta35968","meta35968",-842916204,null)], null);
}));

(reitit.trie.t_reitit$trie35967.cljs$lang$type = true);

(reitit.trie.t_reitit$trie35967.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie35967");

(reitit.trie.t_reitit$trie35967.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.trie/t_reitit$trie35967");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie35967.
 */
reitit.trie.__GT_t_reitit$trie35967 = (function reitit$trie$__GT_t_reitit$trie35967(meta35868,_,key,end,matcher,meta35968){
return (new reitit.trie.t_reitit$trie35967(meta35868,_,key,end,matcher,meta35968));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie36028 = (function (meta35868,_,key,params,data,match,meta36029){
this.meta35868 = meta35868;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta36029 = meta36029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie36028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36030,meta36029__$1){
var self__ = this;
var _36030__$1 = this;
return (new reitit.trie.t_reitit$trie36028(self__.meta35868,self__._,self__.key,self__.params,self__.data,self__.match,meta36029__$1));
}));

(reitit.trie.t_reitit$trie36028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36030){
var self__ = this;
var _36030__$1 = this;
return self__.meta36029;
}));

(reitit.trie.t_reitit$trie36028.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie36028.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
}));

(reitit.trie.t_reitit$trie36028.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
}));

(reitit.trie.t_reitit$trie36028.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
}));

(reitit.trie.t_reitit$trie36028.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie36028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35868","meta35868",2059941867,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie35867","reitit.trie/t_reitit$trie35867",1001888451,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta36029","meta36029",-1216979040,null)], null);
}));

(reitit.trie.t_reitit$trie36028.cljs$lang$type = true);

(reitit.trie.t_reitit$trie36028.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie36028");

(reitit.trie.t_reitit$trie36028.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.trie/t_reitit$trie36028");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie36028.
 */
reitit.trie.__GT_t_reitit$trie36028 = (function reitit$trie$__GT_t_reitit$trie36028(meta35868,_,key,params,data,match,meta36029){
return (new reitit.trie.t_reitit$trie36028(meta35868,_,key,params,data,match,meta36029));
});



/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie36038 = (function (meta35868,_,matchers,ordered_QMARK_,size,meta36039){
this.meta35868 = meta35868;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta36039 = meta36039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie36038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36040,meta36039__$1){
var self__ = this;
var _36040__$1 = this;
return (new reitit.trie.t_reitit$trie36038(self__.meta35868,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta36039__$1));
}));

(reitit.trie.t_reitit$trie36038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36040){
var self__ = this;
var _36040__$1 = this;
return self__.meta36039;
}));

(reitit.trie.t_reitit$trie36038.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie36038.prototype.reitit$trie$Matcher$match$arity$4 = (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__5002__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__36648 = (j + (1));
j = G__36648;
continue;
}
} else {
return null;
}
break;
}
}));

(reitit.trie.t_reitit$trie36038.prototype.reitit$trie$Matcher$view$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
}));

(reitit.trie.t_reitit$trie36038.prototype.reitit$trie$Matcher$depth$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
}));

(reitit.trie.t_reitit$trie36038.prototype.reitit$trie$Matcher$length$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(reitit.trie.t_reitit$trie36038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35868","meta35868",2059941867,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie35867","reitit.trie/t_reitit$trie35867",1001888451,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta36039","meta36039",-121499289,null)], null);
}));

(reitit.trie.t_reitit$trie36038.cljs$lang$type = true);

(reitit.trie.t_reitit$trie36038.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie36038");

(reitit.trie.t_reitit$trie36038.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.trie/t_reitit$trie36038");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie36038.
 */
reitit.trie.__GT_t_reitit$trie36038 = (function reitit$trie$__GT_t_reitit$trie36038(meta35868,_,matchers,ordered_QMARK_,size,meta36039){
return (new reitit.trie.t_reitit$trie36038(meta35868,_,matchers,ordered_QMARK_,size,meta36039));
});



/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie35867 = (function (meta35868){
this.meta35868 = meta35868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.trie.t_reitit$trie35867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35869,meta35868__$1){
var self__ = this;
var _35869__$1 = this;
return (new reitit.trie.t_reitit$trie35867(meta35868__$1));
}));

(reitit.trie.t_reitit$trie35867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35869){
var self__ = this;
var _35869__$1 = this;
return self__.meta35868;
}));

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
return (new reitit.trie.t_reitit$trie35873(self__.meta35868,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
return (new reitit.trie.t_reitit$trie35891(self__.meta35868,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
return (new reitit.trie.t_reitit$trie35967(self__.meta35868,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
return (new reitit.trie.t_reitit$trie36028(self__.meta35868,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
return (new reitit.trie.t_reitit$trie36038(self__.meta35868,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
}));

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
}));

(reitit.trie.t_reitit$trie35867.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return (function (path){
var temp__5821__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5821__auto__)){
var match = temp__5821__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
}));

(reitit.trie.t_reitit$trie35867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta35868","meta35868",2059941867,null)], null);
}));

(reitit.trie.t_reitit$trie35867.cljs$lang$type = true);

(reitit.trie.t_reitit$trie35867.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie35867");

(reitit.trie.t_reitit$trie35867.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.trie/t_reitit$trie35867");
}));

/**
 * Positional factory function for reitit.trie/t_reitit$trie35867.
 */
reitit.trie.__GT_t_reitit$trie35867 = (function reitit$trie$__GT_t_reitit$trie35867(meta35868){
return (new reitit.trie.t_reitit$trie35867(meta35868));
});


reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
return (new reitit.trie.t_reitit$trie35867(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__36052 = arguments.length;
switch (G__36052) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36066){
var vec__36067 = p__36066;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36067,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36067,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
}));

(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__36071){
var map__36073 = p__36071;
var map__36073__$1 = cljs.core.__destructure_map(map__36073);
var opts = map__36073__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36073__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__36078 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__36078) : parameters.call(null, G__36078));
})();
return reitit.trie._insert((function (){var or__5002__auto__ = node;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
}));

(reitit.trie.insert.cljs$lang$maxFixedArity = 4);

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__36109 = arguments.length;
switch (G__36109) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
}));

(reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__36129,compiler,cp){
var map__36130 = p__36129;
var map__36130__$1 = cljs.core.__destructure_map(map__36130);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36130__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = (function (p__36133){
var map__36136 = p__36133;
var map__36136__$1 = cljs.core.__destructure_map(map__36136);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__5002__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__36142 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__36142,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__36142;
}
})(),(function (){var iter__5480__auto__ = (function reitit$trie$iter__36145(s__36146){
return (new cljs.core.LazySeq(null,(function (){
var s__36146__$1 = s__36146;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36146__$1);
if(temp__5823__auto__){
var s__36146__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36146__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__36146__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__36148 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__36147 = (0);
while(true){
if((i__36147 < size__5479__auto__)){
var vec__36157 = cljs.core._nth(c__5478__auto__,i__36147);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(1),null);
cljs.core.chunk_append(b__36148,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__36674 = (i__36147 + (1));
i__36147 = G__36674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36148),reitit$trie$iter__36145(cljs.core.chunk_rest(s__36146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36148),null);
}
} else {
var vec__36171 = cljs.core.first(s__36146__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36171,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36171,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__36145(cljs.core.rest(s__36146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(children);
})()),(function (){var iter__5480__auto__ = (function reitit$trie$iter__36179(s__36180){
return (new cljs.core.LazySeq(null,(function (){
var s__36180__$1 = s__36180;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36180__$1);
if(temp__5823__auto__){
var s__36180__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36180__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__36180__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__36182 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__36181 = (0);
while(true){
if((i__36181 < size__5479__auto__)){
var vec__36188 = cljs.core._nth(c__5478__auto__,i__36181);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36188,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36188,(1),null);
cljs.core.chunk_append(b__36182,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__36691 = (i__36181 + (1));
i__36181 = G__36691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36182),reitit$trie$iter__36179(cljs.core.chunk_rest(s__36180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36182),null);
}
} else {
var vec__36198 = cljs.core.first(s__36180__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36198,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36198,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__36179(cljs.core.rest(s__36180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(wilds);
})()),(function (){var iter__5480__auto__ = (function reitit$trie$iter__36206(s__36207){
return (new cljs.core.LazySeq(null,(function (){
var s__36207__$1 = s__36207;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36207__$1);
if(temp__5823__auto__){
var s__36207__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36207__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__36207__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__36209 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__36208 = (0);
while(true){
if((i__36208 < size__5479__auto__)){
var vec__36217 = cljs.core._nth(c__5478__auto__,i__36208);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36217,(1),null);
cljs.core.chunk_append(b__36209,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__36701 = (i__36208 + (1));
i__36208 = G__36701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36209),reitit$trie$iter__36206(cljs.core.chunk_rest(s__36207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36209),null);
}
} else {
var vec__36229 = cljs.core.first(s__36207__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36229,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36229,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__36206(cljs.core.rest(s__36207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return null;
}
}
}));

(reitit.trie.compile.cljs$lang$maxFixedArity = 3);

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__36249 = arguments.length;
switch (G__36249) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
}));

(reitit.trie.pretty.cljs$lang$maxFixedArity = 2);

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__36261 = arguments.length;
switch (G__36261) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
}));

(reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
}));

(reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.trie.js.map
