goog.provide('adabwana.core');
if((typeof adabwana !== 'undefined') && (typeof adabwana.core !== 'undefined') && (typeof adabwana.core.current_page !== 'undefined')){
} else {
adabwana.core.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
adabwana.core.loading_spinner = (function adabwana$core$loading_spinner(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-center.align-items-center","div.d-flex.justify-content-center.align-items-center",835967285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner-border.text-primary","div.spinner-border.text-primary",353112375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.visually-hidden","span.visually-hidden",1984287191),"Loading..."], null)], null)], null);
});
adabwana.core.init = (function adabwana$core$init(){
adabwana.htmx.init_htmx();

reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(adabwana.routes.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null)),(function (m){
return cljs.core.reset_BANG_(adabwana.core.current_page,(cljs.core.truth_(m)?adabwana.layout.layout(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(m))):null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));

var root_el = document.getElementById("app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if(cljs.core.truth_(cljs.core.deref(adabwana.core.current_page))){
return cljs.core.deref(adabwana.core.current_page);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adabwana.core.loading_spinner], null);
}
})], null),root_el);
});

//# sourceMappingURL=adabwana.core.js.map
