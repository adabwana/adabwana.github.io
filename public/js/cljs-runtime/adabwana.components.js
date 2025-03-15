goog.provide('adabwana.components');
adabwana.components.contact_info = (function adabwana$components$contact_info(p__50178){
var map__50179 = p__50178;
var map__50179__$1 = cljs.core.__destructure_map(map__50179);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var github = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword(null,"github","github",567794498));
var linkedin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50179__$1,new cljs.core.Keyword(null,"linkedin","linkedin",-1733650847));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.d-flex.justify-content-center.align-items-center","div.mt-4.d-flex.justify-content-center.align-items-center",239916666),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-decoration-none","a.text-decoration-none",1243733345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-envelope.me-2","i.bi.bi-envelope.me-2",-1153177214)], null),email], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-3","span.mx-3",218021251),"|"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-decoration-none","a.text-decoration-none",1243733345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-github.me-2","i.bi.bi-github.me-2",1551866727)], null),"GitLab"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mx-3","span.mx-3",218021251),"|"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-decoration-none","a.text-decoration-none",1243733345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),linkedin], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-linkedin.me-2","i.bi.bi-linkedin.me-2",-1603471483)], null),"LinkedIn"], null)], null);
});
adabwana.components.research_interests = (function adabwana$components$research_interests(interests){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-title.mb-4","h2.card-title.mb-4",-1490934150),"Research Interests"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group.list-group-flush","ul.list-group.list-group-flush",-307313016),(function (){var iter__5480__auto__ = (function adabwana$components$research_interests_$_iter__50180(s__50181){
return (new cljs.core.LazySeq(null,(function (){
var s__50181__$1 = s__50181;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50181__$1);
if(temp__5823__auto__){
var s__50181__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50181__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50181__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50183 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50182 = (0);
while(true){
if((i__50182 < size__5479__auto__)){
var interest = cljs.core._nth(c__5478__auto__,i__50182);
cljs.core.chunk_append(b__50183,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fw-bold","div.fw-bold",-681165133),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(interest)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-2","ul.mt-2",-237871742),(function (){var iter__5480__auto__ = ((function (i__50182,interest,c__5478__auto__,size__5479__auto__,b__50183,s__50181__$2,temp__5823__auto__){
return (function adabwana$components$research_interests_$_iter__50180_$_iter__50184(s__50185){
return (new cljs.core.LazySeq(null,((function (i__50182,interest,c__5478__auto__,size__5479__auto__,b__50183,s__50181__$2,temp__5823__auto__){
return (function (){
var s__50185__$1 = s__50185;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50185__$1);
if(temp__5823__auto____$1){
var s__50185__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50185__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50185__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50187 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50186 = (0);
while(true){
if((i__50186 < size__5479__auto____$1)){
var subtopic = cljs.core._nth(c__5478__auto____$1,i__50186);
cljs.core.chunk_append(b__50187,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),subtopic], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subtopic], null)));

var G__50316 = (i__50186 + (1));
i__50186 = G__50316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50187),adabwana$components$research_interests_$_iter__50180_$_iter__50184(cljs.core.chunk_rest(s__50185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50187),null);
}
} else {
var subtopic = cljs.core.first(s__50185__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),subtopic], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subtopic], null)),adabwana$components$research_interests_$_iter__50180_$_iter__50184(cljs.core.rest(s__50185__$2)));
}
} else {
return null;
}
break;
}
});})(i__50182,interest,c__5478__auto__,size__5479__auto__,b__50183,s__50181__$2,temp__5823__auto__))
,null,null));
});})(i__50182,interest,c__5478__auto__,size__5479__auto__,b__50183,s__50181__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"subtopics","subtopics",-1975155410).cljs$core$IFn$_invoke$arity$1(interest));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(interest)], null)));

var G__50317 = (i__50182 + (1));
i__50182 = G__50317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50183),adabwana$components$research_interests_$_iter__50180(cljs.core.chunk_rest(s__50181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50183),null);
}
} else {
var interest = cljs.core.first(s__50181__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fw-bold","div.fw-bold",-681165133),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(interest)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-2","ul.mt-2",-237871742),(function (){var iter__5480__auto__ = ((function (interest,s__50181__$2,temp__5823__auto__){
return (function adabwana$components$research_interests_$_iter__50180_$_iter__50188(s__50189){
return (new cljs.core.LazySeq(null,(function (){
var s__50189__$1 = s__50189;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50189__$1);
if(temp__5823__auto____$1){
var s__50189__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50189__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50189__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50191 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50190 = (0);
while(true){
if((i__50190 < size__5479__auto__)){
var subtopic = cljs.core._nth(c__5478__auto__,i__50190);
cljs.core.chunk_append(b__50191,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),subtopic], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subtopic], null)));

var G__50326 = (i__50190 + (1));
i__50190 = G__50326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50191),adabwana$components$research_interests_$_iter__50180_$_iter__50188(cljs.core.chunk_rest(s__50189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50191),null);
}
} else {
var subtopic = cljs.core.first(s__50189__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),subtopic], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),subtopic], null)),adabwana$components$research_interests_$_iter__50180_$_iter__50188(cljs.core.rest(s__50189__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(interest,s__50181__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"subtopics","subtopics",-1975155410).cljs$core$IFn$_invoke$arity$1(interest));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"topic","topic",-1960480691).cljs$core$IFn$_invoke$arity$1(interest)], null)),adabwana$components$research_interests_$_iter__50180(cljs.core.rest(s__50181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(interests);
})()], null)], null)], null);
});
adabwana.components.featured_projects = (function adabwana$components$featured_projects(projects){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-title.mb-4","h2.card-title.mb-4",-1490934150),"Featured Projects"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-group","div.list-group",1215632197),(function (){var iter__5480__auto__ = (function adabwana$components$featured_projects_$_iter__50192(s__50193){
return (new cljs.core.LazySeq(null,(function (){
var s__50193__$1 = s__50193;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50193__$1);
if(temp__5823__auto__){
var s__50193__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50193__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50193__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50195 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50194 = (0);
while(true){
if((i__50194 < size__5479__auto__)){
var project = cljs.core._nth(c__5478__auto__,i__50194);
cljs.core.chunk_append(b__50195,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action","a.list-group-item.list-group-item-action",1872831780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(project);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.w-100.justify-content-between","div.d-flex.w-100.justify-content-between",-1498589586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.mb-1","h5.mb-1",313489168),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-1","p.mb-1",-713197412),new cljs.core.Keyword(null,"organization","organization",-1639375379).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-1","p.mb-1",-713197412),cljs.core.first(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(project))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null)));

var G__50327 = (i__50194 + (1));
i__50194 = G__50327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50195),adabwana$components$featured_projects_$_iter__50192(cljs.core.chunk_rest(s__50193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50195),null);
}
} else {
var project = cljs.core.first(s__50193__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action","a.list-group-item.list-group-item-action",1872831780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(project);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.w-100.justify-content-between","div.d-flex.w-100.justify-content-between",-1498589586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.mb-1","h5.mb-1",313489168),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-1","p.mb-1",-713197412),new cljs.core.Keyword(null,"organization","organization",-1639375379).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-1","p.mb-1",-713197412),cljs.core.first(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(project))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null)),adabwana$components$featured_projects_$_iter__50192(cljs.core.rest(s__50193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"spotlight","spotlight",-1758601723),projects));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-end.mt-3","div.text-end.mt-3",-287221932),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline-primary.btn-sm","a.btn.btn-outline-primary.btn-sm",-441841121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/projects"], null),"View All Projects"], null)], null)], null)], null);
});
adabwana.components.recent_publications = (function adabwana$components$recent_publications(publications){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-title.mb-4","h2.card-title.mb-4",-1490934150),"Recent Publications"], null),(function (){var iter__5480__auto__ = (function adabwana$components$recent_publications_$_iter__50196(s__50197){
return (new cljs.core.LazySeq(null,(function (){
var s__50197__$1 = s__50197;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50197__$1);
if(temp__5823__auto__){
var s__50197__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50197__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50197__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50199 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50198 = (0);
while(true){
if((i__50198 < size__5479__auto__)){
var pub = cljs.core._nth(c__5478__auto__,i__50198);
cljs.core.chunk_append(b__50199,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"publisher","publisher",-153364540).cljs$core$IFn$_invoke$arity$1(pub)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pub)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub)], null),"Read More"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null)));

var G__50328 = (i__50198 + (1));
i__50198 = G__50328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50199),adabwana$components$recent_publications_$_iter__50196(cljs.core.chunk_rest(s__50197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50199),null);
}
} else {
var pub = cljs.core.first(s__50197__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"publisher","publisher",-153364540).cljs$core$IFn$_invoke$arity$1(pub)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pub)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub)], null),"Read More"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null)),adabwana$components$recent_publications_$_iter__50196(cljs.core.rest(s__50197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),publications));
})()], null)], null);
});
adabwana.components.recent_presentations = (function adabwana$components$recent_presentations(presentations){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-title.mb-4","h2.card-title.mb-4",-1490934150),"Recent Presentations"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5480__auto__ = (function adabwana$components$recent_presentations_$_iter__50200(s__50201){
return (new cljs.core.LazySeq(null,(function (){
var s__50201__$1 = s__50201;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50201__$1);
if(temp__5823__auto__){
var s__50201__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50201__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50201__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50203 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50202 = (0);
while(true){
if((i__50202 < size__5479__auto__)){
var pres = cljs.core._nth(c__5478__auto__,i__50202);
cljs.core.chunk_append(b__50203,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.mb-4","div.col-md-12.mb-4",-1985702476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pres)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-2","ul.mt-2",-237871742),(function (){var iter__5480__auto__ = ((function (i__50202,pres,c__5478__auto__,size__5479__auto__,b__50203,s__50201__$2,temp__5823__auto__){
return (function adabwana$components$recent_presentations_$_iter__50200_$_iter__50204(s__50205){
return (new cljs.core.LazySeq(null,((function (i__50202,pres,c__5478__auto__,size__5479__auto__,b__50203,s__50201__$2,temp__5823__auto__){
return (function (){
var s__50205__$1 = s__50205;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50205__$1);
if(temp__5823__auto____$1){
var s__50205__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50205__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50205__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50207 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50206 = (0);
while(true){
if((i__50206 < size__5479__auto____$1)){
var detail = cljs.core._nth(c__5478__auto____$1,i__50206);
cljs.core.chunk_append(b__50207,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.small","li.small",781757984),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50332 = (i__50206 + (1));
i__50206 = G__50332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50207),adabwana$components$recent_presentations_$_iter__50200_$_iter__50204(cljs.core.chunk_rest(s__50205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50207),null);
}
} else {
var detail = cljs.core.first(s__50205__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.small","li.small",781757984),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$recent_presentations_$_iter__50200_$_iter__50204(cljs.core.rest(s__50205__$2)));
}
} else {
return null;
}
break;
}
});})(i__50202,pres,c__5478__auto__,size__5479__auto__,b__50203,s__50201__$2,temp__5823__auto__))
,null,null));
});})(i__50202,pres,c__5478__auto__,size__5479__auto__,b__50203,s__50201__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres));
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-danger","a.btn.btn-sm.btn-outline-danger",754492510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pres),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-youtube.me-2","i.bi.bi-youtube.me-2",-170249602)], null),"Watch Video"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null)));

var G__50334 = (i__50202 + (1));
i__50202 = G__50334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50203),adabwana$components$recent_presentations_$_iter__50200(cljs.core.chunk_rest(s__50201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50203),null);
}
} else {
var pres = cljs.core.first(s__50201__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12.mb-4","div.col-md-12.mb-4",-1985702476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pres)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-2","ul.mt-2",-237871742),(function (){var iter__5480__auto__ = ((function (pres,s__50201__$2,temp__5823__auto__){
return (function adabwana$components$recent_presentations_$_iter__50200_$_iter__50208(s__50209){
return (new cljs.core.LazySeq(null,(function (){
var s__50209__$1 = s__50209;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50209__$1);
if(temp__5823__auto____$1){
var s__50209__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50209__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50209__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50211 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50210 = (0);
while(true){
if((i__50210 < size__5479__auto__)){
var detail = cljs.core._nth(c__5478__auto__,i__50210);
cljs.core.chunk_append(b__50211,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.small","li.small",781757984),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50337 = (i__50210 + (1));
i__50210 = G__50337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50211),adabwana$components$recent_presentations_$_iter__50200_$_iter__50208(cljs.core.chunk_rest(s__50209__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50211),null);
}
} else {
var detail = cljs.core.first(s__50209__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.small","li.small",781757984),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$recent_presentations_$_iter__50200_$_iter__50208(cljs.core.rest(s__50209__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(pres,s__50201__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres));
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-danger","a.btn.btn-sm.btn-outline-danger",754492510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pres),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-youtube.me-2","i.bi.bi-youtube.me-2",-170249602)], null),"Watch Video"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null)),adabwana$components$recent_presentations_$_iter__50200(cljs.core.rest(s__50201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),presentations));
})()], null)], null)], null);
});
adabwana.components.academic_background = (function adabwana$components$academic_background(degrees){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Academic Background"], null),(function (){var iter__5480__auto__ = (function adabwana$components$academic_background_$_iter__50212(s__50213){
return (new cljs.core.LazySeq(null,(function (){
var s__50213__$1 = s__50213;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50213__$1);
if(temp__5823__auto__){
var s__50213__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50213__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50213__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50215 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50214 = (0);
while(true){
if((i__50214 < size__5479__auto__)){
var edu = cljs.core._nth(c__5478__auto__,i__50214);
cljs.core.chunk_append(b__50215,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(edu),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted.ms-2","span.text-muted.ms-2",-583343340),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(edu)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group.list-group-flush","ul.list-group.list-group-flush",-307313016),(function (){var iter__5480__auto__ = ((function (i__50214,edu,c__5478__auto__,size__5479__auto__,b__50215,s__50213__$2,temp__5823__auto__){
return (function adabwana$components$academic_background_$_iter__50212_$_iter__50216(s__50217){
return (new cljs.core.LazySeq(null,((function (i__50214,edu,c__5478__auto__,size__5479__auto__,b__50215,s__50213__$2,temp__5823__auto__){
return (function (){
var s__50217__$1 = s__50217;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50217__$1);
if(temp__5823__auto____$1){
var s__50217__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50217__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50217__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50219 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50218 = (0);
while(true){
if((i__50218 < size__5479__auto____$1)){
var degree = cljs.core._nth(c__5478__auto____$1,i__50218);
cljs.core.chunk_append(b__50219,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)], null)," in ",new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree),(cljs.core.truth_(new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962)," (GPA: ",new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree),")"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted.small","div.text-muted.small",627888085),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(degree)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree))].join('')], null)));

var G__50338 = (i__50218 + (1));
i__50218 = G__50338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50219),adabwana$components$academic_background_$_iter__50212_$_iter__50216(cljs.core.chunk_rest(s__50217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50219),null);
}
} else {
var degree = cljs.core.first(s__50217__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)], null)," in ",new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree),(cljs.core.truth_(new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962)," (GPA: ",new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree),")"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted.small","div.text-muted.small",627888085),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(degree)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree))].join('')], null)),adabwana$components$academic_background_$_iter__50212_$_iter__50216(cljs.core.rest(s__50217__$2)));
}
} else {
return null;
}
break;
}
});})(i__50214,edu,c__5478__auto__,size__5479__auto__,b__50215,s__50213__$2,temp__5823__auto__))
,null,null));
});})(i__50214,edu,c__5478__auto__,size__5479__auto__,b__50215,s__50213__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"degrees","degrees",2015169884).cljs$core$IFn$_invoke$arity$1(edu));
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(edu))], null)));

var G__50339 = (i__50214 + (1));
i__50214 = G__50339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50215),adabwana$components$academic_background_$_iter__50212(cljs.core.chunk_rest(s__50213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50215),null);
}
} else {
var edu = cljs.core.first(s__50213__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(edu),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted.ms-2","span.text-muted.ms-2",-583343340),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(edu)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group.list-group-flush","ul.list-group.list-group-flush",-307313016),(function (){var iter__5480__auto__ = ((function (edu,s__50213__$2,temp__5823__auto__){
return (function adabwana$components$academic_background_$_iter__50212_$_iter__50220(s__50221){
return (new cljs.core.LazySeq(null,(function (){
var s__50221__$1 = s__50221;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50221__$1);
if(temp__5823__auto____$1){
var s__50221__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50221__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50221__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50223 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50222 = (0);
while(true){
if((i__50222 < size__5479__auto__)){
var degree = cljs.core._nth(c__5478__auto__,i__50222);
cljs.core.chunk_append(b__50223,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)], null)," in ",new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree),(cljs.core.truth_(new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962)," (GPA: ",new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree),")"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted.small","div.text-muted.small",627888085),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(degree)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree))].join('')], null)));

var G__50340 = (i__50222 + (1));
i__50222 = G__50340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50223),adabwana$components$academic_background_$_iter__50212_$_iter__50220(cljs.core.chunk_rest(s__50221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50223),null);
}
} else {
var degree = cljs.core.first(s__50221__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)], null)," in ",new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree),(cljs.core.truth_(new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-muted","span.text-muted",-1283719962)," (GPA: ",new cljs.core.Keyword(null,"gpa","gpa",-1736790019).cljs$core$IFn$_invoke$arity$1(degree),")"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-muted.small","div.text-muted.small",627888085),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(degree)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(degree)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(degree))].join('')], null)),adabwana$components$academic_background_$_iter__50212_$_iter__50220(cljs.core.rest(s__50221__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(edu,s__50213__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"degrees","degrees",2015169884).cljs$core$IFn$_invoke$arity$1(edu));
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(edu))], null)),adabwana$components$academic_background_$_iter__50212(cljs.core.rest(s__50213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(degrees);
})()], null);
});
adabwana.components.professional_experience = (function adabwana$components$professional_experience(positions){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Professional Experience"], null),(function (){var iter__5480__auto__ = (function adabwana$components$professional_experience_$_iter__50224(s__50225){
return (new cljs.core.LazySeq(null,(function (){
var s__50225__$1 = s__50225;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50225__$1);
if(temp__5823__auto__){
var s__50225__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50225__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50225__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50227 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50226 = (0);
while(true){
if((i__50226 < size__5479__auto__)){
var pos = cljs.core._nth(c__5478__auto__,i__50226);
cljs.core.chunk_append(b__50227,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.card-subtitle.mb-2.text-muted","h6.card-subtitle.mb-2.text-muted",1501465852),new cljs.core.Keyword(null,"organization","organization",-1639375379).cljs$core$IFn$_invoke$arity$1(pos)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-3","ul.mt-3",502912612),(function (){var iter__5480__auto__ = ((function (i__50226,pos,c__5478__auto__,size__5479__auto__,b__50227,s__50225__$2,temp__5823__auto__){
return (function adabwana$components$professional_experience_$_iter__50224_$_iter__50228(s__50229){
return (new cljs.core.LazySeq(null,((function (i__50226,pos,c__5478__auto__,size__5479__auto__,b__50227,s__50225__$2,temp__5823__auto__){
return (function (){
var s__50229__$1 = s__50229;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50229__$1);
if(temp__5823__auto____$1){
var s__50229__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50229__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50229__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50231 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50230 = (0);
while(true){
if((i__50230 < size__5479__auto____$1)){
var detail = cljs.core._nth(c__5478__auto____$1,i__50230);
cljs.core.chunk_append(b__50231,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50341 = (i__50230 + (1));
i__50230 = G__50341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50231),adabwana$components$professional_experience_$_iter__50224_$_iter__50228(cljs.core.chunk_rest(s__50229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50231),null);
}
} else {
var detail = cljs.core.first(s__50229__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$professional_experience_$_iter__50224_$_iter__50228(cljs.core.rest(s__50229__$2)));
}
} else {
return null;
}
break;
}
});})(i__50226,pos,c__5478__auto__,size__5479__auto__,b__50227,s__50225__$2,temp__5823__auto__))
,null,null));
});})(i__50226,pos,c__5478__auto__,size__5479__auto__,b__50227,s__50225__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pos));
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pos)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pos))].join('')], null)));

var G__50342 = (i__50226 + (1));
i__50226 = G__50342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50227),adabwana$components$professional_experience_$_iter__50224(cljs.core.chunk_rest(s__50225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50227),null);
}
} else {
var pos = cljs.core.first(s__50225__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.card-subtitle.mb-2.text-muted","h6.card-subtitle.mb-2.text-muted",1501465852),new cljs.core.Keyword(null,"organization","organization",-1639375379).cljs$core$IFn$_invoke$arity$1(pos)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pos)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-3","ul.mt-3",502912612),(function (){var iter__5480__auto__ = ((function (pos,s__50225__$2,temp__5823__auto__){
return (function adabwana$components$professional_experience_$_iter__50224_$_iter__50232(s__50233){
return (new cljs.core.LazySeq(null,(function (){
var s__50233__$1 = s__50233;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50233__$1);
if(temp__5823__auto____$1){
var s__50233__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50233__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50233__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50235 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50234 = (0);
while(true){
if((i__50234 < size__5479__auto__)){
var detail = cljs.core._nth(c__5478__auto__,i__50234);
cljs.core.chunk_append(b__50235,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50343 = (i__50234 + (1));
i__50234 = G__50343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50235),adabwana$components$professional_experience_$_iter__50224_$_iter__50232(cljs.core.chunk_rest(s__50233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50235),null);
}
} else {
var detail = cljs.core.first(s__50233__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$professional_experience_$_iter__50224_$_iter__50232(cljs.core.rest(s__50233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(pos,s__50225__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pos));
})()], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pos)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pos))].join('')], null)),adabwana$components$professional_experience_$_iter__50224(cljs.core.rest(s__50225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(positions);
})()], null);
});
adabwana.components.project_list = (function adabwana$components$project_list(projects){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5480__auto__ = (function adabwana$components$project_list_$_iter__50236(s__50237){
return (new cljs.core.LazySeq(null,(function (){
var s__50237__$1 = s__50237;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50237__$1);
if(temp__5823__auto__){
var s__50237__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50237__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50237__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50239 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50238 = (0);
while(true){
if((i__50238 < size__5479__auto__)){
var project = cljs.core._nth(c__5478__auto__,i__50238);
cljs.core.chunk_append(b__50239,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.mb-4","div.col-md-6.mb-4",1467792856),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.h-100","div.card.h-100",-740791335),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.card-subtitle.mb-2.text-muted","h6.card-subtitle.mb-2.text-muted",1501465852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"organization","organization",-1639375379).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-3","ul.mt-3",502912612),(function (){var iter__5480__auto__ = ((function (i__50238,project,c__5478__auto__,size__5479__auto__,b__50239,s__50237__$2,temp__5823__auto__){
return (function adabwana$components$project_list_$_iter__50236_$_iter__50240(s__50241){
return (new cljs.core.LazySeq(null,((function (i__50238,project,c__5478__auto__,size__5479__auto__,b__50239,s__50237__$2,temp__5823__auto__){
return (function (){
var s__50241__$1 = s__50241;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50241__$1);
if(temp__5823__auto____$1){
var s__50241__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50241__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50241__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50243 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50242 = (0);
while(true){
if((i__50242 < size__5479__auto____$1)){
var detail = cljs.core._nth(c__5478__auto____$1,i__50242);
cljs.core.chunk_append(b__50243,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50344 = (i__50242 + (1));
i__50242 = G__50344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50243),adabwana$components$project_list_$_iter__50236_$_iter__50240(cljs.core.chunk_rest(s__50241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50243),null);
}
} else {
var detail = cljs.core.first(s__50241__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$project_list_$_iter__50236_$_iter__50240(cljs.core.rest(s__50241__$2)));
}
} else {
return null;
}
break;
}
});})(i__50238,project,c__5478__auto__,size__5479__auto__,b__50239,s__50237__$2,temp__5823__auto__))
,null,null));
});})(i__50238,project,c__5478__auto__,size__5479__auto__,b__50239,s__50237__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(project));
})()], null),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(project))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-primary","a.btn.btn-sm.btn-outline-primary",-107508926),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-box-arrow-up-right.me-2","i.bi.bi-box-arrow-up-right.me-2",-1475569240)], null),"View Project"], null)], null):null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null)));

var G__50345 = (i__50238 + (1));
i__50238 = G__50345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50239),adabwana$components$project_list_$_iter__50236(cljs.core.chunk_rest(s__50237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50239),null);
}
} else {
var project = cljs.core.first(s__50237__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.mb-4","div.col-md-6.mb-4",1467792856),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.h-100","div.card.h-100",-740791335),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.card-subtitle.mb-2.text-muted","h6.card-subtitle.mb-2.text-muted",1501465852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"organization","organization",-1639375379).cljs$core$IFn$_invoke$arity$1(project)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(project)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-3","ul.mt-3",502912612),(function (){var iter__5480__auto__ = ((function (project,s__50237__$2,temp__5823__auto__){
return (function adabwana$components$project_list_$_iter__50236_$_iter__50244(s__50245){
return (new cljs.core.LazySeq(null,(function (){
var s__50245__$1 = s__50245;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50245__$1);
if(temp__5823__auto____$1){
var s__50245__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50245__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50245__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50247 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50246 = (0);
while(true){
if((i__50246 < size__5479__auto__)){
var detail = cljs.core._nth(c__5478__auto__,i__50246);
cljs.core.chunk_append(b__50247,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50346 = (i__50246 + (1));
i__50246 = G__50346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50247),adabwana$components$project_list_$_iter__50236_$_iter__50244(cljs.core.chunk_rest(s__50245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50247),null);
}
} else {
var detail = cljs.core.first(s__50245__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$project_list_$_iter__50236_$_iter__50244(cljs.core.rest(s__50245__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(project,s__50237__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(project));
})()], null),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(project))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-primary","a.btn.btn-sm.btn-outline-primary",-107508926),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(project),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-box-arrow-up-right.me-2","i.bi.bi-box-arrow-up-right.me-2",-1475569240)], null),"View Project"], null)], null):null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(project)], null)),adabwana$components$project_list_$_iter__50236(cljs.core.rest(s__50237__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(projects);
})()], null);
});
adabwana.components.publications_section = (function adabwana$components$publications_section(publications){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Publications"], null),(function (){var iter__5480__auto__ = (function adabwana$components$publications_section_$_iter__50248(s__50249){
return (new cljs.core.LazySeq(null,(function (){
var s__50249__$1 = s__50249;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50249__$1);
if(temp__5823__auto__){
var s__50249__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50249__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50249__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50251 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50250 = (0);
while(true){
if((i__50250 < size__5479__auto__)){
var pub = cljs.core._nth(c__5478__auto__,i__50250);
cljs.core.chunk_append(b__50251,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"publisher","publisher",-153364540).cljs$core$IFn$_invoke$arity$1(pub)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pub)], null),((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pub)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = ((function (i__50250,pub,c__5478__auto__,size__5479__auto__,b__50251,s__50249__$2,temp__5823__auto__){
return (function adabwana$components$publications_section_$_iter__50248_$_iter__50252(s__50253){
return (new cljs.core.LazySeq(null,((function (i__50250,pub,c__5478__auto__,size__5479__auto__,b__50251,s__50249__$2,temp__5823__auto__){
return (function (){
var s__50253__$1 = s__50253;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50253__$1);
if(temp__5823__auto____$1){
var s__50253__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50253__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50253__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50255 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50254 = (0);
while(true){
if((i__50254 < size__5479__auto____$1)){
var detail = cljs.core._nth(c__5478__auto____$1,i__50254);
cljs.core.chunk_append(b__50255,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50347 = (i__50254 + (1));
i__50254 = G__50347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50255),adabwana$components$publications_section_$_iter__50248_$_iter__50252(cljs.core.chunk_rest(s__50253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50255),null);
}
} else {
var detail = cljs.core.first(s__50253__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$publications_section_$_iter__50248_$_iter__50252(cljs.core.rest(s__50253__$2)));
}
} else {
return null;
}
break;
}
});})(i__50250,pub,c__5478__auto__,size__5479__auto__,b__50251,s__50249__$2,temp__5823__auto__))
,null,null));
});})(i__50250,pub,c__5478__auto__,size__5479__auto__,b__50251,s__50249__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pub));
})()], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub)], null),"Read More"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null)));

var G__50348 = (i__50250 + (1));
i__50250 = G__50348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50251),adabwana$components$publications_section_$_iter__50248(cljs.core.chunk_rest(s__50249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50251),null);
}
} else {
var pub = cljs.core.first(s__50249__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"publisher","publisher",-153364540).cljs$core$IFn$_invoke$arity$1(pub)," \u00B7 ",new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pub)], null),((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pub)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = ((function (pub,s__50249__$2,temp__5823__auto__){
return (function adabwana$components$publications_section_$_iter__50248_$_iter__50256(s__50257){
return (new cljs.core.LazySeq(null,(function (){
var s__50257__$1 = s__50257;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50257__$1);
if(temp__5823__auto____$1){
var s__50257__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50257__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50257__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50259 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50258 = (0);
while(true){
if((i__50258 < size__5479__auto__)){
var detail = cljs.core._nth(c__5478__auto__,i__50258);
cljs.core.chunk_append(b__50259,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50349 = (i__50258 + (1));
i__50258 = G__50349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50259),adabwana$components$publications_section_$_iter__50248_$_iter__50256(cljs.core.chunk_rest(s__50257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50259),null);
}
} else {
var detail = cljs.core.first(s__50257__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$publications_section_$_iter__50248_$_iter__50256(cljs.core.rest(s__50257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(pub,s__50249__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pub));
})()], null)),(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pub)], null),"Read More"], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pub)], null)),adabwana$components$publications_section_$_iter__50248(cljs.core.rest(s__50249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(publications);
})()], null)], null);
});
adabwana.components.presentations_section = (function adabwana$components$presentations_section(presentations){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Video Presentations"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5480__auto__ = (function adabwana$components$presentations_section_$_iter__50260(s__50261){
return (new cljs.core.LazySeq(null,(function (){
var s__50261__$1 = s__50261;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50261__$1);
if(temp__5823__auto__){
var s__50261__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50261__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50261__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50263 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50262 = (0);
while(true){
if((i__50262 < size__5479__auto__)){
var pres = cljs.core._nth(c__5478__auto__,i__50262);
cljs.core.chunk_append(b__50263,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.mb-4","div.col-md-6.mb-4",1467792856),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.h-100","div.card.h-100",-740791335),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pres)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-3","ul.mt-3",502912612),(function (){var iter__5480__auto__ = ((function (i__50262,pres,c__5478__auto__,size__5479__auto__,b__50263,s__50261__$2,temp__5823__auto__){
return (function adabwana$components$presentations_section_$_iter__50260_$_iter__50264(s__50265){
return (new cljs.core.LazySeq(null,((function (i__50262,pres,c__5478__auto__,size__5479__auto__,b__50263,s__50261__$2,temp__5823__auto__){
return (function (){
var s__50265__$1 = s__50265;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50265__$1);
if(temp__5823__auto____$1){
var s__50265__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50265__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50265__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50267 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50266 = (0);
while(true){
if((i__50266 < size__5479__auto____$1)){
var detail = cljs.core._nth(c__5478__auto____$1,i__50266);
cljs.core.chunk_append(b__50267,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50350 = (i__50266 + (1));
i__50266 = G__50350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50267),adabwana$components$presentations_section_$_iter__50260_$_iter__50264(cljs.core.chunk_rest(s__50265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50267),null);
}
} else {
var detail = cljs.core.first(s__50265__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$presentations_section_$_iter__50260_$_iter__50264(cljs.core.rest(s__50265__$2)));
}
} else {
return null;
}
break;
}
});})(i__50262,pres,c__5478__auto__,size__5479__auto__,b__50263,s__50261__$2,temp__5823__auto__))
,null,null));
});})(i__50262,pres,c__5478__auto__,size__5479__auto__,b__50263,s__50261__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres));
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-danger","a.btn.btn-sm.btn-outline-danger",754492510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pres),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-youtube.me-2","i.bi.bi-youtube.me-2",-170249602)], null),"Watch Video"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null)));

var G__50351 = (i__50262 + (1));
i__50262 = G__50351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50263),adabwana$components$presentations_section_$_iter__50260(cljs.core.chunk_rest(s__50261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50263),null);
}
} else {
var pres = cljs.core.first(s__50261__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.mb-4","div.col-md-6.mb-4",1467792856),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.h-100","div.card.h-100",-740791335),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(pres)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mt-3","ul.mt-3",502912612),(function (){var iter__5480__auto__ = ((function (pres,s__50261__$2,temp__5823__auto__){
return (function adabwana$components$presentations_section_$_iter__50260_$_iter__50268(s__50269){
return (new cljs.core.LazySeq(null,(function (){
var s__50269__$1 = s__50269;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50269__$1);
if(temp__5823__auto____$1){
var s__50269__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50269__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50269__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50271 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50270 = (0);
while(true){
if((i__50270 < size__5479__auto__)){
var detail = cljs.core._nth(c__5478__auto__,i__50270);
cljs.core.chunk_append(b__50271,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50352 = (i__50270 + (1));
i__50270 = G__50352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50271),adabwana$components$presentations_section_$_iter__50260_$_iter__50268(cljs.core.chunk_rest(s__50269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50271),null);
}
} else {
var detail = cljs.core.first(s__50269__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$presentations_section_$_iter__50260_$_iter__50268(cljs.core.rest(s__50269__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(pres,s__50261__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(pres));
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-danger","a.btn.btn-sm.btn-outline-danger",754492510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(pres),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.bi.bi-youtube.me-2","i.bi.bi-youtube.me-2",-170249602)], null),"Watch Video"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(pres)], null)),adabwana$components$presentations_section_$_iter__50260(cljs.core.rest(s__50261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(presentations);
})()], null)], null)], null);
});
adabwana.components.teaching_experience = (function adabwana$components$teaching_experience(experience){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Teaching Experience"], null),(function (){var iter__5480__auto__ = (function adabwana$components$teaching_experience_$_iter__50272(s__50273){
return (new cljs.core.LazySeq(null,(function (){
var s__50273__$1 = s__50273;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__50273__$1);
if(temp__5823__auto__){
var s__50273__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50273__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50273__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50275 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50274 = (0);
while(true){
if((i__50274 < size__5479__auto__)){
var term = cljs.core._nth(c__5478__auto__,i__50274);
cljs.core.chunk_append(b__50275,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(term)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.card-subtitle.mb-2.text-muted","h6.card-subtitle.mb-2.text-muted",1501465852),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(term)], null),(function (){var iter__5480__auto__ = ((function (i__50274,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__){
return (function adabwana$components$teaching_experience_$_iter__50272_$_iter__50276(s__50277){
return (new cljs.core.LazySeq(null,((function (i__50274,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__){
return (function (){
var s__50277__$1 = s__50277;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50277__$1);
if(temp__5823__auto____$1){
var s__50277__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50277__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50277__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50279 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50278 = (0);
while(true){
if((i__50278 < size__5479__auto____$1)){
var course = cljs.core._nth(c__5478__auto____$1,i__50278);
cljs.core.chunk_append(b__50279,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3","div.mb-3",2018571275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.mb-2.fw-bold","h6.mb-2.fw-bold",-158171436),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = ((function (i__50278,i__50274,course,c__5478__auto____$1,size__5479__auto____$1,b__50279,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__){
return (function adabwana$components$teaching_experience_$_iter__50272_$_iter__50276_$_iter__50280(s__50281){
return (new cljs.core.LazySeq(null,((function (i__50278,i__50274,course,c__5478__auto____$1,size__5479__auto____$1,b__50279,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__){
return (function (){
var s__50281__$1 = s__50281;
while(true){
var temp__5823__auto____$2 = cljs.core.seq(s__50281__$1);
if(temp__5823__auto____$2){
var s__50281__$2 = temp__5823__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__50281__$2)){
var c__5478__auto____$2 = cljs.core.chunk_first(s__50281__$2);
var size__5479__auto____$2 = cljs.core.count(c__5478__auto____$2);
var b__50283 = cljs.core.chunk_buffer(size__5479__auto____$2);
if((function (){var i__50282 = (0);
while(true){
if((i__50282 < size__5479__auto____$2)){
var detail = cljs.core._nth(c__5478__auto____$2,i__50282);
cljs.core.chunk_append(b__50283,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50353 = (i__50282 + (1));
i__50282 = G__50353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50283),adabwana$components$teaching_experience_$_iter__50272_$_iter__50276_$_iter__50280(cljs.core.chunk_rest(s__50281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50283),null);
}
} else {
var detail = cljs.core.first(s__50281__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$teaching_experience_$_iter__50272_$_iter__50276_$_iter__50280(cljs.core.rest(s__50281__$2)));
}
} else {
return null;
}
break;
}
});})(i__50278,i__50274,course,c__5478__auto____$1,size__5479__auto____$1,b__50279,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__))
,null,null));
});})(i__50278,i__50274,course,c__5478__auto____$1,size__5479__auto____$1,b__50279,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(course));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)], null)));

var G__50354 = (i__50278 + (1));
i__50278 = G__50354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50279),adabwana$components$teaching_experience_$_iter__50272_$_iter__50276(cljs.core.chunk_rest(s__50277__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50279),null);
}
} else {
var course = cljs.core.first(s__50277__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3","div.mb-3",2018571275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.mb-2.fw-bold","h6.mb-2.fw-bold",-158171436),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = ((function (i__50274,course,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__){
return (function adabwana$components$teaching_experience_$_iter__50272_$_iter__50276_$_iter__50284(s__50285){
return (new cljs.core.LazySeq(null,((function (i__50274,course,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__){
return (function (){
var s__50285__$1 = s__50285;
while(true){
var temp__5823__auto____$2 = cljs.core.seq(s__50285__$1);
if(temp__5823__auto____$2){
var s__50285__$2 = temp__5823__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__50285__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50285__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50287 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50286 = (0);
while(true){
if((i__50286 < size__5479__auto____$1)){
var detail = cljs.core._nth(c__5478__auto____$1,i__50286);
cljs.core.chunk_append(b__50287,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50355 = (i__50286 + (1));
i__50286 = G__50355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50287),adabwana$components$teaching_experience_$_iter__50272_$_iter__50276_$_iter__50284(cljs.core.chunk_rest(s__50285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50287),null);
}
} else {
var detail = cljs.core.first(s__50285__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$teaching_experience_$_iter__50272_$_iter__50276_$_iter__50284(cljs.core.rest(s__50285__$2)));
}
} else {
return null;
}
break;
}
});})(i__50274,course,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__))
,null,null));
});})(i__50274,course,s__50277__$2,temp__5823__auto____$1,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(course));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)], null)),adabwana$components$teaching_experience_$_iter__50272_$_iter__50276(cljs.core.rest(s__50277__$2)));
}
} else {
return null;
}
break;
}
});})(i__50274,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__))
,null,null));
});})(i__50274,term,c__5478__auto__,size__5479__auto__,b__50275,s__50273__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(term));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(term)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(term))].join('')], null)));

var G__50356 = (i__50274 + (1));
i__50274 = G__50356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50275),adabwana$components$teaching_experience_$_iter__50272(cljs.core.chunk_rest(s__50273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50275),null);
}
} else {
var term = cljs.core.first(s__50273__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.card-title","h5.card-title",-2010521752),new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(term)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.card-subtitle.mb-2.text-muted","h6.card-subtitle.mb-2.text-muted",1501465852),new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(term)], null),(function (){var iter__5480__auto__ = ((function (term,s__50273__$2,temp__5823__auto__){
return (function adabwana$components$teaching_experience_$_iter__50272_$_iter__50288(s__50289){
return (new cljs.core.LazySeq(null,(function (){
var s__50289__$1 = s__50289;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__50289__$1);
if(temp__5823__auto____$1){
var s__50289__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50289__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50289__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50291 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50290 = (0);
while(true){
if((i__50290 < size__5479__auto__)){
var course = cljs.core._nth(c__5478__auto__,i__50290);
cljs.core.chunk_append(b__50291,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3","div.mb-3",2018571275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.mb-2.fw-bold","h6.mb-2.fw-bold",-158171436),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = ((function (i__50290,course,c__5478__auto__,size__5479__auto__,b__50291,s__50289__$2,temp__5823__auto____$1,term,s__50273__$2,temp__5823__auto__){
return (function adabwana$components$teaching_experience_$_iter__50272_$_iter__50288_$_iter__50292(s__50293){
return (new cljs.core.LazySeq(null,((function (i__50290,course,c__5478__auto__,size__5479__auto__,b__50291,s__50289__$2,temp__5823__auto____$1,term,s__50273__$2,temp__5823__auto__){
return (function (){
var s__50293__$1 = s__50293;
while(true){
var temp__5823__auto____$2 = cljs.core.seq(s__50293__$1);
if(temp__5823__auto____$2){
var s__50293__$2 = temp__5823__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__50293__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__50293__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__50295 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__50294 = (0);
while(true){
if((i__50294 < size__5479__auto____$1)){
var detail = cljs.core._nth(c__5478__auto____$1,i__50294);
cljs.core.chunk_append(b__50295,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50357 = (i__50294 + (1));
i__50294 = G__50357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50295),adabwana$components$teaching_experience_$_iter__50272_$_iter__50288_$_iter__50292(cljs.core.chunk_rest(s__50293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50295),null);
}
} else {
var detail = cljs.core.first(s__50293__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$teaching_experience_$_iter__50272_$_iter__50288_$_iter__50292(cljs.core.rest(s__50293__$2)));
}
} else {
return null;
}
break;
}
});})(i__50290,course,c__5478__auto__,size__5479__auto__,b__50291,s__50289__$2,temp__5823__auto____$1,term,s__50273__$2,temp__5823__auto__))
,null,null));
});})(i__50290,course,c__5478__auto__,size__5479__auto__,b__50291,s__50289__$2,temp__5823__auto____$1,term,s__50273__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(course));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)], null)));

var G__50358 = (i__50290 + (1));
i__50290 = G__50358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50291),adabwana$components$teaching_experience_$_iter__50272_$_iter__50288(cljs.core.chunk_rest(s__50289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50291),null);
}
} else {
var course = cljs.core.first(s__50289__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3","div.mb-3",2018571275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h6.mb-2.fw-bold","h6.mb-2.fw-bold",-158171436),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(course))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = ((function (course,s__50289__$2,temp__5823__auto____$1,term,s__50273__$2,temp__5823__auto__){
return (function adabwana$components$teaching_experience_$_iter__50272_$_iter__50288_$_iter__50296(s__50297){
return (new cljs.core.LazySeq(null,(function (){
var s__50297__$1 = s__50297;
while(true){
var temp__5823__auto____$2 = cljs.core.seq(s__50297__$1);
if(temp__5823__auto____$2){
var s__50297__$2 = temp__5823__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__50297__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__50297__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__50299 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__50298 = (0);
while(true){
if((i__50298 < size__5479__auto__)){
var detail = cljs.core._nth(c__5478__auto__,i__50298);
cljs.core.chunk_append(b__50299,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)));

var G__50359 = (i__50298 + (1));
i__50298 = G__50359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50299),adabwana$components$teaching_experience_$_iter__50272_$_iter__50288_$_iter__50296(cljs.core.chunk_rest(s__50297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50299),null);
}
} else {
var detail = cljs.core.first(s__50297__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),detail], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),detail], null)),adabwana$components$teaching_experience_$_iter__50272_$_iter__50288_$_iter__50296(cljs.core.rest(s__50297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(course,s__50289__$2,temp__5823__auto____$1,term,s__50273__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(course));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(course)], null)),adabwana$components$teaching_experience_$_iter__50272_$_iter__50288(cljs.core.rest(s__50289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(term,s__50273__$2,temp__5823__auto__))
;
return iter__5480__auto__(new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(term));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"institution","institution",-70023072).cljs$core$IFn$_invoke$arity$1(term)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(term))].join('')], null)),adabwana$components$teaching_experience_$_iter__50272(cljs.core.rest(s__50273__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(experience);
})()], null);
});

//# sourceMappingURL=adabwana.components.js.map
