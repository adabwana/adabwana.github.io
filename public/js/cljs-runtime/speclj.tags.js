goog.provide('speclj.tags');
speclj.tags.pass_includes_QMARK_ = (function speclj$tags$pass_includes_QMARK_(includes,tags){
if(cljs.core.empty_QMARK_(includes)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(includes,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(includes,cljs.core.set(tags)));
}
});
speclj.tags.pass_excludes_QMARK_ = (function speclj$tags$pass_excludes_QMARK_(excludes,tags){
if(cljs.core.empty_QMARK_(excludes)){
return true;
} else {
return cljs.core.not(cljs.core.some((function (p1__44448_SHARP_){
return cljs.core.contains_QMARK_(excludes,p1__44448_SHARP_);
}),tags));
}
});
speclj.tags.pass_tag_filter_QMARK_ = (function speclj$tags$pass_tag_filter_QMARK_(var_args){
var G__44450 = arguments.length;
switch (G__44450) {
case 1:
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (tags){
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2(speclj.config._STAR_tag_filter_STAR_,tags);
}));

(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (filter,tags){
return ((speclj.tags.pass_includes_QMARK_(new cljs.core.Keyword(null,"includes","includes",-438304563).cljs$core$IFn$_invoke$arity$1(filter),tags)) && (speclj.tags.pass_excludes_QMARK_(new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(filter),tags)));
}));

(speclj.tags.pass_tag_filter_QMARK_.cljs$lang$maxFixedArity = 2);

speclj.tags.tags_for = (function speclj$tags$tags_for(context){
if(cljs.core.truth_(context)){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__44451 = cljs.core.deref(context.parent);
return (speclj.tags.tags_for.cljs$core$IFn$_invoke$arity$1 ? speclj.tags.tags_for.cljs$core$IFn$_invoke$arity$1(G__44451) : speclj.tags.tags_for.call(null, G__44451));
})(),cljs.core.deref(context.tags));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
speclj.tags.tag_sets_for = (function speclj$tags$tag_sets_for(context){
var context_seq = cljs.core.tree_seq((function (p1__44452_SHARP_){
return (!((p1__44452_SHARP_ == null)));
}),(function (p1__44453_SHARP_){
return cljs.core.deref(p1__44453_SHARP_.children);
}),context);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(speclj.tags.tags_for,context_seq);
});
speclj.tags.context_with_tags_seq = (function speclj$tags$context_with_tags_seq(context){
var context_seq = cljs.core.tree_seq((function (p1__44454_SHARP_){
return (!((p1__44454_SHARP_ == null)));
}),(function (p1__44455_SHARP_){
return cljs.core.deref(p1__44455_SHARP_.children);
}),context);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44456_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"tag-set","tag-set",-711527597)],[p1__44456_SHARP_,speclj.tags.tags_for(p1__44456_SHARP_)]);
}),context_seq);
});
speclj.tags.describe_filter = (function speclj$tags$describe_filter(var_args){
var G__44458 = arguments.length;
switch (G__44458) {
case 0:
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0 = (function (){
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1(speclj.config._STAR_tag_filter_STAR_);
}));

(speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1 = (function (filter){
var includes = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"includes","includes",-438304563).cljs$core$IFn$_invoke$arity$1(filter)));
var excludes = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(filter)));
if(((includes) || (excludes))){
return ["Filtering tags.",((includes)?[" Including: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",includes),"."].join(''):null),((excludes)?[" Excluding: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",excludes),"."].join(''):null)].join('');
} else {
return null;
}
}));

(speclj.tags.describe_filter.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=speclj.tags.js.map
