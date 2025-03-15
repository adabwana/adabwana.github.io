goog.provide('spec_tools.data_spec');

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
spec_tools.data_spec.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k46283,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__46287 = k46283;
var G__46287__$1 = (((G__46287 instanceof cljs.core.Keyword))?G__46287.fqn:null);
switch (G__46287__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46283,else__5303__auto__);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__46290){
var vec__46291 = p__46290;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46291,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46291,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.OptionalKey{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46282){
var self__ = this;
var G__46282__$1 = this;
return (new cljs.core.RecordIter((0),G__46282__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-261180351 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46284,other46285){
var self__ = this;
var this46284__$1 = this;
return (((!((other46285 == null)))) && ((((this46284__$1.constructor === other46285.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46284__$1.k,other46285.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46284__$1.__extmap,other46285.__extmap)))))));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k46283){
var self__ = this;
var this__5307__auto____$1 = this;
var G__46314 = k46283;
var G__46314__$1 = (((G__46314 instanceof cljs.core.Keyword))?G__46314.fqn:null);
switch (G__46314__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46283);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__46282){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__46321 = cljs.core.keyword_identical_QMARK_;
var expr__46322 = k__5309__auto__;
if(cljs.core.truth_((pred__46321.cljs$core$IFn$_invoke$arity$2 ? pred__46321.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__46322) : pred__46321.call(null, new cljs.core.Keyword(null,"k","k",-2146297393),expr__46322)))){
return (new spec_tools.data_spec.OptionalKey(G__46282,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__46282),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__46282){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,G__46282,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$type = true);

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/OptionalKey",null,(1),null));
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/OptionalKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/OptionalKey.
 */
spec_tools.data_spec.__GT_OptionalKey = (function spec_tools$data_spec$__GT_OptionalKey(k){
return (new spec_tools.data_spec.OptionalKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/OptionalKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_OptionalKey = (function spec_tools$data_spec$map__GT_OptionalKey(G__46286){
var extmap__5342__auto__ = (function (){var G__46344 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46286,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__46286)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46344);
} else {
return G__46344;
}
})();
return (new spec_tools.data_spec.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__46286),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
spec_tools.data_spec.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k46350,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__46372 = k46350;
var G__46372__$1 = (((G__46372 instanceof cljs.core.Keyword))?G__46372.fqn:null);
switch (G__46372__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46350,else__5303__auto__);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__46376){
var vec__46377 = p__46376;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46377,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46377,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.RequiredKey{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46349){
var self__ = this;
var G__46349__$1 = this;
return (new cljs.core.RecordIter((0),G__46349__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-470971127 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46351,other46352){
var self__ = this;
var this46351__$1 = this;
return (((!((other46352 == null)))) && ((((this46351__$1.constructor === other46352.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46351__$1.k,other46352.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46351__$1.__extmap,other46352.__extmap)))))));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k46350){
var self__ = this;
var this__5307__auto____$1 = this;
var G__46444 = k46350;
var G__46444__$1 = (((G__46444 instanceof cljs.core.Keyword))?G__46444.fqn:null);
switch (G__46444__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46350);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__46349){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__46453 = cljs.core.keyword_identical_QMARK_;
var expr__46454 = k__5309__auto__;
if(cljs.core.truth_((pred__46453.cljs$core$IFn$_invoke$arity$2 ? pred__46453.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__46454) : pred__46453.call(null, new cljs.core.Keyword(null,"k","k",-2146297393),expr__46454)))){
return (new spec_tools.data_spec.RequiredKey(G__46349,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__46349),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__46349){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,G__46349,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$type = true);

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/RequiredKey",null,(1),null));
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/RequiredKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/RequiredKey.
 */
spec_tools.data_spec.__GT_RequiredKey = (function spec_tools$data_spec$__GT_RequiredKey(k){
return (new spec_tools.data_spec.RequiredKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/RequiredKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_RequiredKey = (function spec_tools$data_spec$map__GT_RequiredKey(G__46363){
var extmap__5342__auto__ = (function (){var G__46481 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46363,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__46363)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46481);
} else {
return G__46481;
}
})();
return (new spec_tools.data_spec.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__46363),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
spec_tools.data_spec.Maybe = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k46483,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__46491 = k46483;
var G__46491__$1 = (((G__46491 instanceof cljs.core.Keyword))?G__46491.fqn:null);
switch (G__46491__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46483,else__5303__auto__);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__46493){
var vec__46494 = p__46493;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46494,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46494,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.Maybe{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46482){
var self__ = this;
var G__46482__$1 = this;
return (new cljs.core.RecordIter((0),G__46482__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1150224619 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46484,other46485){
var self__ = this;
var this46484__$1 = this;
return (((!((other46485 == null)))) && ((((this46484__$1.constructor === other46485.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46484__$1.v,other46485.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46484__$1.__extmap,other46485.__extmap)))))));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k46483){
var self__ = this;
var this__5307__auto____$1 = this;
var G__46502 = k46483;
var G__46502__$1 = (((G__46502 instanceof cljs.core.Keyword))?G__46502.fqn:null);
switch (G__46502__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46483);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__46482){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__46503 = cljs.core.keyword_identical_QMARK_;
var expr__46504 = k__5309__auto__;
if(cljs.core.truth_((pred__46503.cljs$core$IFn$_invoke$arity$2 ? pred__46503.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__46504) : pred__46503.call(null, new cljs.core.Keyword(null,"v","v",21465059),expr__46504)))){
return (new spec_tools.data_spec.Maybe(G__46482,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__46482),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__46482){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,G__46482,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Maybe.cljs$lang$type = true);

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Maybe",null,(1),null));
}));

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/Maybe");
}));

/**
 * Positional factory function for spec-tools.data-spec/Maybe.
 */
spec_tools.data_spec.__GT_Maybe = (function spec_tools$data_spec$__GT_Maybe(v){
return (new spec_tools.data_spec.Maybe(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Maybe, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Maybe = (function spec_tools$data_spec$map__GT_Maybe(G__46487){
var extmap__5342__auto__ = (function (){var G__46506 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46487,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__46487)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46506);
} else {
return G__46506;
}
})();
return (new spec_tools.data_spec.Maybe(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__46487),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
spec_tools.data_spec.Or = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k46508,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__46512 = k46508;
var G__46512__$1 = (((G__46512 instanceof cljs.core.Keyword))?G__46512.fqn:null);
switch (G__46512__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46508,else__5303__auto__);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__46513){
var vec__46514 = p__46513;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46514,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.Or{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46507){
var self__ = this;
var G__46507__$1 = this;
return (new cljs.core.RecordIter((0),G__46507__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1620079539 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46509,other46510){
var self__ = this;
var this46509__$1 = this;
return (((!((other46510 == null)))) && ((((this46509__$1.constructor === other46510.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46509__$1.v,other46510.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46509__$1.__extmap,other46510.__extmap)))))));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k46508){
var self__ = this;
var this__5307__auto____$1 = this;
var G__46517 = k46508;
var G__46517__$1 = (((G__46517 instanceof cljs.core.Keyword))?G__46517.fqn:null);
switch (G__46517__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46508);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__46507){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__46518 = cljs.core.keyword_identical_QMARK_;
var expr__46519 = k__5309__auto__;
if(cljs.core.truth_((pred__46518.cljs$core$IFn$_invoke$arity$2 ? pred__46518.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__46519) : pred__46518.call(null, new cljs.core.Keyword(null,"v","v",21465059),expr__46519)))){
return (new spec_tools.data_spec.Or(G__46507,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__46507),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__46507){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,G__46507,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Or.cljs$lang$type = true);

(spec_tools.data_spec.Or.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Or",null,(1),null));
}));

(spec_tools.data_spec.Or.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/Or");
}));

/**
 * Positional factory function for spec-tools.data-spec/Or.
 */
spec_tools.data_spec.__GT_Or = (function spec_tools$data_spec$__GT_Or(v){
return (new spec_tools.data_spec.Or(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Or, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Or = (function spec_tools$data_spec$map__GT_Or(G__46511){
var extmap__5342__auto__ = (function (){var G__46522 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46511,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__46511)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46522);
} else {
return G__46522;
}
})();
return (new spec_tools.data_spec.Or(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__46511),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * Makes a key optional:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/opt :age) int?}
 *   ```
 */
spec_tools.data_spec.opt = (function spec_tools$data_spec$opt(k){
return spec_tools.data_spec.__GT_OptionalKey(k);
});
/**
 * Test if the key is wrapped with [[opt]]
 */
spec_tools.data_spec.opt_QMARK_ = (function spec_tools$data_spec$opt_QMARK_(x){
return (x instanceof spec_tools.data_spec.OptionalKey);
});
/**
 * Makes a key required:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/req :age) int?}
 *   ```
 */
spec_tools.data_spec.req = (function spec_tools$data_spec$req(k){
return spec_tools.data_spec.__GT_RequiredKey(k);
});
/**
 * Test if the key is wrapped with [[req]]
 */
spec_tools.data_spec.req_QMARK_ = (function spec_tools$data_spec$req_QMARK_(x){
return (!(spec_tools.data_spec.opt_QMARK_(x)));
});
/**
 * Makes a value nillable:
 * 
 *   ```clojure
 *   {:name string?
 * :age (ds/maybe int?)}
 *   ```
 */
spec_tools.data_spec.maybe = (function spec_tools$data_spec$maybe(v){
return spec_tools.data_spec.__GT_Maybe(v);
});
/**
 * Test if the value is wrapped with [[maybe]]
 */
spec_tools.data_spec.maybe_QMARK_ = (function spec_tools$data_spec$maybe_QMARK_(x){
return (x instanceof spec_tools.data_spec.Maybe);
});
spec_tools.data_spec.or = (function spec_tools$data_spec$or(v){
return spec_tools.data_spec.__GT_Or(v);
});
spec_tools.data_spec.or_QMARK_ = (function spec_tools$data_spec$or_QMARK_(x){
return (x instanceof spec_tools.data_spec.Or);
});
/**
 * Test if the key is wrapped with [[opt]] or [[req]]
 */
spec_tools.data_spec.wrapped_key_QMARK_ = (function spec_tools$data_spec$wrapped_key_QMARK_(x){
return ((spec_tools.data_spec.opt_QMARK_(x)) || ((x instanceof spec_tools.data_spec.RequiredKey)));
});
/**
 * Unwrap the [[opt]] or [[req]] key.
 */
spec_tools.data_spec.unwrap_key = (function spec_tools$data_spec$unwrap_key(x){
if(spec_tools.data_spec.wrapped_key_QMARK_(x)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.data_spec._nested_key = (function spec_tools$data_spec$_nested_key(n,k){
if(cljs.core.qualified_keyword_QMARK_(n)){
} else {
throw (new Error(["Assert failed: ","spec must have a qualified name","\n","(qualified-keyword? n)"].join('')));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(n),"$",cljs.core.name(n),(function (){var temp__5821__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5821__auto__)){
var kns = temp__5821__auto__;
return ["$",kns].join('');
} else {
return null;
}
})(),"/",cljs.core.name(k)].join(''));
});
spec_tools.data_spec._map_spec = (function spec_tools$data_spec$_map_spec(data,p__46533){
var map__46534 = p__46533;
var map__46534__$1 = cljs.core.__destructure_map(map__46534);
var opts = map__46534__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var keys_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46534__$1,new cljs.core.Keyword(null,"keys-spec","keys-spec",920288948),spec_tools.impl.keys_spec);
var keys_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46534__$1,new cljs.core.Keyword(null,"keys-default","keys-default",-1790373239));
var temp__5821__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data));
if(and__5000__auto__){
var vec__46535 = cljs.core.first(data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46535,(1),null);
var and__5000__auto____$1 = (!((((k instanceof cljs.core.Keyword)) || (spec_tools.data_spec.wrapped_key_QMARK_(k)))));
if(and__5000__auto____$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5821__auto__)){
var vec__46539 = temp__5821__auto__;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46539,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46539,(1),null);
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.map_of_spec((spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(n,k_SINGLEQUOTE_) : spec_tools.data_spec.spec.call(null, n,k_SINGLEQUOTE_)),(function (){var G__46542 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"spec","spec",347520401),v_SINGLEQUOTE_], null);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__46542) : spec_tools.data_spec.spec.call(null, G__46542));
})())], null));
} else {
var m = cljs.core.reduce_kv((function (acc,k,v){
var k__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = keys_default;
if(cljs.core.truth_(and__5000__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__5000__auto__;
}
})())?(keys_default.cljs$core$IFn$_invoke$arity$1 ? keys_default.cljs$core$IFn$_invoke$arity$1(k) : keys_default.call(null, k)):k);
var kv = spec_tools.data_spec.unwrap_key(k__$1);
var rk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([((spec_tools.data_spec.req_QMARK_(k__$1))?"req":"opt"),(((!(cljs.core.qualified_keyword_QMARK_(kv))))?"-un":null)].join(''));
var vec__46543 = ((spec_tools.data_spec.maybe_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(v),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__46532_SHARP_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),p1__46532_SHARP_], null));
}),spec_tools.impl.nilable_spec)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.identity], null));
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46543,(0),null);
var wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46543,(1),null);
var vec__46546 = ((cljs.core.qualified_keyword_QMARK_(kv))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kv,v__$1))?kv:null)], null):(function (){var k_SINGLEQUOTE_ = spec_tools.data_spec._nested_key(n,spec_tools.data_spec.unwrap_key(kv));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,k_SINGLEQUOTE_], null);
})());
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46546,(0),null);
var n_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46546,(1),null);
var v_SINGLEQUOTE_ = (cljs.core.truth_(n_SINGLEQUOTE_)?(function (){var G__46550 = (function (){var G__46551 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),n_SINGLEQUOTE_),new cljs.core.Keyword(null,"spec","spec",347520401),v__$1);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__46551) : spec_tools.data_spec.spec.call(null, G__46551));
})();
return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__46550) : wrap.call(null, G__46550));
})():null);
var G__46553 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,rk,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),k_SINGLEQUOTE_);
if(cljs.core.truth_(v_SINGLEQUOTE_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46553,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_], null));
} else {
return G__46553;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
var defs = new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298).cljs$core$IFn$_invoke$arity$1(m);
var data__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298))));
var seq__46554_46692 = cljs.core.seq(defs);
var chunk__46555_46693 = null;
var count__46556_46694 = (0);
var i__46557_46695 = (0);
while(true){
if((i__46557_46695 < count__46556_46694)){
var vec__46570_46696 = chunk__46555_46693.cljs$core$IIndexed$_nth$arity$2(null, i__46557_46695);
var k_46697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46570_46696,(0),null);
var s_46698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46570_46696,(1),null);
var synthetic_QMARK__46699 = (function (){var and__5000__auto__ = spec_tools.core.spec_QMARK_(s_46698);
if(cljs.core.truth_(and__5000__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_46698)));
} else {
return and__5000__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_46697,(function (){var G__46573 = s_46698;
if(cljs.core.truth_(synthetic_QMARK__46699)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46573,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__46573;
}
})());


var G__46700 = seq__46554_46692;
var G__46701 = chunk__46555_46693;
var G__46702 = count__46556_46694;
var G__46703 = (i__46557_46695 + (1));
seq__46554_46692 = G__46700;
chunk__46555_46693 = G__46701;
count__46556_46694 = G__46702;
i__46557_46695 = G__46703;
continue;
} else {
var temp__5823__auto___46704 = cljs.core.seq(seq__46554_46692);
if(temp__5823__auto___46704){
var seq__46554_46705__$1 = temp__5823__auto___46704;
if(cljs.core.chunked_seq_QMARK_(seq__46554_46705__$1)){
var c__5525__auto___46706 = cljs.core.chunk_first(seq__46554_46705__$1);
var G__46707 = cljs.core.chunk_rest(seq__46554_46705__$1);
var G__46708 = c__5525__auto___46706;
var G__46709 = cljs.core.count(c__5525__auto___46706);
var G__46710 = (0);
seq__46554_46692 = G__46707;
chunk__46555_46693 = G__46708;
count__46556_46694 = G__46709;
i__46557_46695 = G__46710;
continue;
} else {
var vec__46574_46711 = cljs.core.first(seq__46554_46705__$1);
var k_46712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46574_46711,(0),null);
var s_46713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46574_46711,(1),null);
var synthetic_QMARK__46717 = (function (){var and__5000__auto__ = spec_tools.core.spec_QMARK_(s_46713);
if(cljs.core.truth_(and__5000__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_46713)));
} else {
return and__5000__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_46712,(function (){var G__46579 = s_46713;
if(cljs.core.truth_(synthetic_QMARK__46717)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46579,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__46579;
}
})());


var G__46718 = cljs.core.next(seq__46554_46705__$1);
var G__46719 = null;
var G__46720 = (0);
var G__46721 = (0);
seq__46554_46692 = G__46718;
chunk__46555_46693 = G__46719;
count__46556_46694 = G__46720;
i__46557_46695 = G__46721;
continue;
}
} else {
}
}
break;
}

return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),(keys_spec.cljs$core$IFn$_invoke$arity$1 ? keys_spec.cljs$core$IFn$_invoke$arity$1(data__$1) : keys_spec.call(null, data__$1))], null));
}
});
spec_tools.data_spec._coll_spec = (function spec_tools$data_spec$_coll_spec(data,p__46582){
var map__46583 = p__46582;
var map__46583__$1 = cljs.core.__destructure_map(map__46583);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46583__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," should be homogeneous, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," values found"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"values","values",372645556),data], null));
}

var spec = (function (){var G__46584 = n;
var G__46585 = cljs.core.first(data);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__46584,G__46585) : spec_tools.data_spec.spec.call(null, G__46584,G__46585));
})();
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.coll_of_spec(spec,kind)], null));
});
spec_tools.data_spec._or_spec = (function spec_tools$data_spec$_or_spec(n,v){
if(((cljs.core.map_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(v))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec or must be a map of keyword keys -> specs, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," found"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}

return spec_tools.impl.or_spec(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var iter__5480__auto__ = (function spec_tools$data_spec$_or_spec_$_iter__46589(s__46590){
return (new cljs.core.LazySeq(null,(function (){
var s__46590__$1 = s__46590;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__46590__$1);
if(temp__5823__auto__){
var s__46590__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46590__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__46590__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__46592 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__46591 = (0);
while(true){
if((i__46591 < size__5479__auto__)){
var vec__46593 = cljs.core._nth(c__5478__auto__,i__46591);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(1),null);
cljs.core.chunk_append(b__46592,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__46596 = spec_tools.data_spec._nested_key(n,k);
var G__46597 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__46596,G__46597) : spec_tools.data_spec.spec.call(null, G__46596,G__46597));
})()], null));

var G__46725 = (i__46591 + (1));
i__46591 = G__46725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46592),spec_tools$data_spec$_or_spec_$_iter__46589(cljs.core.chunk_rest(s__46590__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46592),null);
}
} else {
var vec__46599 = cljs.core.first(s__46590__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46599,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46599,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__46602 = spec_tools.data_spec._nested_key(n,k);
var G__46603 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__46602,G__46603) : spec_tools.data_spec.spec.call(null, G__46602,G__46603));
})()], null),spec_tools$data_spec$_or_spec_$_iter__46589(cljs.core.rest(s__46590__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})(),cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Creates a `clojure.spec.alpha/Spec` out of a data-spec. Supports 2 arities:
 * 
 *   ```clojure
 *   ;; arity1
 *   (ds/spec
 *  {:spec {:i int?}
 *   :name ::map})
 * 
 *   ;; arity2 (legacy)
 *   (ds/spec ::map {:i int?})
 *   ```
 * 
 *   The following options are valid for the 1 arity case:
 * 
 *   | Key              | Description
 *   | -----------------|----------------
 *   | `:spec`          | The wrapped data-spec.
 *   | `:name`          | Qualified root spec name - used to generate unique names for sub-specs.
 *   | `:keys-spec`     | Function to generate the keys-specs, default [[keys-specs]].
 *   | `:keys-default`  | Function to wrap not-wrapped keys, e.g. [[opt]] to make keys optional by default.
 */
spec_tools.data_spec.spec = (function spec_tools$data_spec$spec(var_args){
var G__46608 = arguments.length;
switch (G__46608) {
case 1:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 = (function (p__46611){
var map__46612 = p__46611;
var map__46612__$1 = cljs.core.__destructure_map(map__46612);
var opts = map__46612__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46612__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46612__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var nested_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46612__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973));
if(cljs.core.truth_(spec_tools.data_spec.spec)){
} else {
throw (new Error(["Assert failed: ","missing :spec predicate in data-spec","\n","spec"].join('')));
}

var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"spec","spec",347520401));
var named_spec = (function (p1__46604_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46604_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
var maybe_named_spec = (function (p1__46605_SHARP_){
var G__46615 = p1__46605_SHARP_;
if(cljs.core.not(nested_QMARK_)){
return named_spec(G__46615);
} else {
return G__46615;
}
});
var nested_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973),true);
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(data))){
return maybe_named_spec(data);
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(data))){
return data;
} else {
if(spec_tools.data_spec.or_QMARK_(data)){
return spec_tools.data_spec._or_spec(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(spec_tools.data_spec.maybe_QMARK_(data)){
return spec_tools.impl.nilable_spec(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data)));
} else {
if(cljs.core.map_QMARK_(data)){
return named_spec(spec_tools.data_spec._map_spec(data,nested_opts));
} else {
if(cljs.core.set_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentHashSet.EMPTY)));
} else {
if(cljs.core.vector_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentVector.EMPTY)));
} else {
return maybe_named_spec(spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),data], null)));

}
}
}
}
}
}
}
}));

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"spec","spec",347520401),data], null));
}));

(spec_tools.data_spec.spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.data_spec.js.map
