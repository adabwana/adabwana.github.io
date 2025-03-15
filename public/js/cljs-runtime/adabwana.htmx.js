goog.provide('adabwana.htmx');
adabwana.htmx.init_htmx = (function adabwana$htmx$init_htmx(){

if((typeof window !== 'undefined')){
return fetch("https://unpkg.com/htmx.org@1.9.5").then((function (p1__44379_SHARP_){
return p1__44379_SHARP_.text();
})).then((function (text){
var script = document.createElement("script");
var obj44387_44439 = script;
var obj44388_44440 = (((!((obj44387_44439 == null))))?obj44387_44439:({}));
(obj44388_44440["type"] = "text/javascript");


var obj44392_44445 = script;
var obj44394_44446 = (((!((obj44392_44445 == null))))?obj44392_44445:({}));
(obj44394_44446["textContent"] = text);


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
var obj44411_44451 = node;
var obj44412_44452 = (((!((obj44411_44451 == null))))?obj44411_44451:({}));
(obj44412_44452["hx-get"] = url);


var obj44417_44453 = node;
var obj44419_44454 = (((!((obj44417_44453 == null))))?obj44417_44453:({}));
(obj44419_44454["hx-trigger"] = "load");


var obj44423 = node;
var obj44424 = (((!((obj44423 == null))))?obj44423:({}));
(obj44424["hx-target"] = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_id)].join(''));

return obj44424;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.htmx-container","div.htmx-container",-1673049272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__44406_SHARP_){
return cljs.core.reset_BANG_(node_ref,p1__44406_SHARP_);
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
