goog.provide('adabwana.htmx');
adabwana.htmx.init_htmx = (function adabwana$htmx$init_htmx(){

if((typeof window !== 'undefined')){
return fetch("https://unpkg.com/htmx.org@1.9.5").then((function (p1__44308_SHARP_){
return p1__44308_SHARP_.text();
})).then((function (text){
var script = document.createElement("script");
var obj44318_44384 = script;
var obj44320_44385 = (((!((obj44318_44384 == null))))?obj44318_44384:({}));
(obj44320_44385["type"] = "text/javascript");


var obj44325_44386 = script;
var obj44327_44388 = (((!((obj44325_44386 == null))))?obj44325_44386:({}));
(obj44327_44388["textContent"] = text);


document.head.appendChild(script);

return console.log("HTMX loaded successfully");
}));
} else {
return null;
}
});
adabwana.htmx.highlight_code = (function adabwana$htmx$highlight_code(){

if((((typeof window !== 'undefined')) && ((typeof hljs !== 'undefined')))){
return hljs.highlightAll();
} else {
return null;
}
});
adabwana.htmx.create_htmx_component = (function adabwana$htmx$create_htmx_component(url,target_id){

var node_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = cljs.core.deref(node_ref);
var obj44349_44396 = node;
var obj44351_44397 = (((!((obj44349_44396 == null))))?obj44349_44396:({}));
(obj44351_44397["hx-get"] = url);


var obj44355_44398 = node;
var obj44356_44399 = (((!((obj44355_44398 == null))))?obj44355_44398:({}));
(obj44356_44399["hx-trigger"] = "load");


var obj44360 = node;
var obj44362 = (((!((obj44360 == null))))?obj44360:({}));
(obj44362["hx-target"] = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_id)].join(''));

return obj44362;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.htmx-container","div.htmx-container",-1673049272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__44345_SHARP_){
return cljs.core.reset_BANG_(node_ref,p1__44345_SHARP_);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner-border.text-primary.m-5","div.spinner-border.text-primary.m-5",-478022448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.visually-hidden","span.visually-hidden",1984287191),"Loading..."], null)], null)], null);
})], null));
});
adabwana.htmx.handle_htmx_events = (function adabwana$htmx$handle_htmx_events(){

if((typeof window !== 'undefined')){
var body = document.body();
return body.addEventListener("htmx:afterSwap",(function (_){
return adabwana.htmx.highlight_code();
}));
} else {
return null;
}
});
adabwana.htmx.setup = (function adabwana$htmx$setup(){

adabwana.htmx.init_htmx();

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.delay.cljs$core$IFn$_invoke$arity$1((500)),(function (){
return adabwana.htmx.handle_htmx_events();
}));
});

//# sourceMappingURL=adabwana.htmx.js.map
