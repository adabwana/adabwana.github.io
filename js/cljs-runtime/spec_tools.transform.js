goog.provide('spec_tools.transform');
spec_tools.transform.keyword__GT_string = (function spec_tools$transform$keyword__GT_string(_,x){
if((x instanceof cljs.core.Keyword)){
return spec_tools.impl.qualified_name(x);
} else {
return x;
}
});
spec_tools.transform.keyword_or_string__GT_ = (function spec_tools$transform$keyword_or_string__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
var G__45251 = spec;
var G__45252 = spec_tools.transform.keyword__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45251,G__45252) : f.call(null, G__45251,G__45252));
} else {
if(typeof x === 'string'){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(spec,x) : f.call(null, spec,x));
} else {
return x;

}
}
});
});
spec_tools.transform.keyword__GT_ = (function spec_tools$transform$keyword__GT_(f){
return (function (spec,x){
if((x instanceof cljs.core.Keyword)){
var G__45253 = spec;
var G__45254 = spec_tools.transform.keyword__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45253,G__45254) : f.call(null, G__45253,G__45254));
} else {
return x;

}
});
});
spec_tools.transform.number__GT_string = (function spec_tools$transform$number__GT_string(_,x){
if(typeof x === 'number'){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.number_or_string__GT_ = (function spec_tools$transform$number_or_string__GT_(f){
return (function (spec,x){
if(typeof x === 'number'){
var G__45255 = spec;
var G__45256 = spec_tools.transform.number__GT_string(spec,x);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45255,G__45256) : f.call(null, G__45255,G__45256));
} else {
if(typeof x === 'string'){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(spec,x) : f.call(null, spec,x));
} else {
return x;

}
}
});
});
spec_tools.transform.string__GT_long = (function spec_tools$transform$string__GT_long(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e45257){if((e45257 instanceof Error)){
var ___$1 = e45257;
return x;
} else {
throw e45257;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_double = (function spec_tools$transform$string__GT_double(_,x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e45258){if((e45258 instanceof Error)){
var ___$1 = e45258;
return x;
} else {
throw e45258;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_keyword = (function spec_tools$transform$string__GT_keyword(_,x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.string__GT_boolean = (function spec_tools$transform$string__GT_boolean(_,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",x)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
spec_tools.transform.string__GT_uri = (function spec_tools$transform$string__GT_uri(_,x){
if(typeof x === 'string'){
try{return goog.Uri.parse(x);
}catch (e45259){if((e45259 instanceof Error)){
var ___$1 = e45259;
return x;
} else {
throw e45259;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_uuid = (function spec_tools$transform$string__GT_uuid(_,x){
if(typeof x === 'string'){
try{if(cljs.core.truth_(cljs.core.re_find(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,x))){
return cljs.core.uuid(x);
} else {
return x;
}
}catch (e45260){if((e45260 instanceof Error)){
var ___$1 = e45260;
return x;
} else {
throw e45260;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_date = (function spec_tools$transform$string__GT_date(_,x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e45261){if((e45261 instanceof Error)){
var ___$1 = e45261;
return x;
} else {
throw e45261;

}
}} else {
return x;
}
});
spec_tools.transform.date__GT_string = (function spec_tools$transform$date__GT_string(_,x){
if(cljs.core.inst_QMARK_(x)){
try{return x.toISOString();
}catch (e45262){if((e45262 instanceof Error)){
var ___$1 = e45262;
return x;
} else {
throw e45262;

}
}} else {
return x;
}
});
spec_tools.transform.string__GT_symbol = (function spec_tools$transform$string__GT_symbol(_,x){
if(typeof x === 'string'){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.transform.string__GT_nil = (function spec_tools$transform$string__GT_nil(_,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",x)){
return null;
} else {
return x;
}
});
spec_tools.transform.any__GT_string = (function spec_tools$transform$any__GT_string(_,x){
if((!((x == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
spec_tools.transform.number__GT_double = (function spec_tools$transform$number__GT_double(_,x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
spec_tools.transform.any__GT_any = (function spec_tools$transform$any__GT_any(_,x){
return x;
});
spec_tools.transform.strip_extra_keys = (function spec_tools$transform$strip_extra_keys(p__45263,x){
var map__45264 = p__45263;
var map__45264__$1 = cljs.core.__destructure_map(map__45264);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45264__$1,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460));
if(cljs.core.truth_((function (){var and__5000__auto__ = keys;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.map_QMARK_(x);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.select_keys(x,keys);
} else {
return x;
}
});
spec_tools.transform.fail_on_extra_keys = (function spec_tools$transform$fail_on_extra_keys(p__45265,x){
var map__45266 = p__45265;
var map__45266__$1 = cljs.core.__destructure_map(map__45266);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45266__$1,new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460));
if(((cljs.core.map_QMARK_(x)) && ((!(clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(x)),keys)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});
spec_tools.transform.strip_extra_values = (function spec_tools$transform$strip_extra_values(p__45267,x){
var map__45268 = p__45267;
var map__45268__$1 = cljs.core.__destructure_map(map__45268);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45268__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
var size = cljs.core.count(items);
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.count(x) > size)))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(x,(0),size);
} else {
return x;
}
});
spec_tools.transform.json_type_decoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"keyword","keyword",811389747),spec_tools.transform.string__GT_keyword,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_uuid),new cljs.core.Keyword(null,"date","date",-1463434462),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_date),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_symbol),new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_long),new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_double),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),spec_tools.transform.keyword__GT_(spec_tools.transform.string__GT_boolean),new cljs.core.Keyword(null,"string","string",-1989541586),spec_tools.transform.keyword__GT_string], null)], 0));
spec_tools.transform.string_type_decoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.transform.json_type_decoders,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_long),new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_double),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),spec_tools.transform.keyword_or_string__GT_(spec_tools.transform.string__GT_boolean)], null)], 0));
spec_tools.transform.strip_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),spec_tools.transform.strip_extra_keys], null);
spec_tools.transform.fail_on_extra_keys_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),spec_tools.transform.fail_on_extra_keys], null);
spec_tools.transform.strip_extra_values_type_decoders = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),spec_tools.transform.strip_extra_values], null);
spec_tools.transform.json_type_encoders = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"bigdec","bigdec",1019443956),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"map","map",1371690461)],[spec_tools.transform.date__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.keyword__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_string,spec_tools.transform.any__GT_any,spec_tools.transform.any__GT_any]);
spec_tools.transform.string_type_encoders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.transform.json_type_encoders,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"long","long",-171452093),spec_tools.transform.any__GT_string,new cljs.core.Keyword(null,"double","double",884886883),spec_tools.transform.any__GT_string], null)], 0));

//# sourceMappingURL=spec_tools.transform.js.map
