goog.provide('speclj.running');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_(component)) || (speclj.components.is_characteristic_QMARK_(component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref(component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
var and__5000__auto__ = speclj.components.is_description_QMARK_(component);
if(and__5000__auto__){
return cljs.core.deref(component.has_focus_QMARK_);
} else {
return and__5000__auto__;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__5002__auto__ = speclj.running.focused_QMARK_(component);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = speclj.running.has_focus_QMARK_(component);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var temp__5823__auto__ = cljs.core.deref(component.parent);
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
var G__44813 = parent;
component = G__44813;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__5002__auto__ = speclj.running.focused_QMARK_(component);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = speclj.running.has_focus_QMARK_(component);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.not(speclj.running.focus_mode_QMARK_(component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_(component)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(component.characteristics),cljs.core.deref(component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_(component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_(component);

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(speclj.running.focus_BANG_,cljs.core.deref(component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_(component);

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(speclj.running.focus_children_BANG_,cljs.core.deref(component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5823__auto__ = cljs.core.deref(component.parent);
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
cljs.core.reset_BANG_(parent.has_focus_QMARK_,true);

var G__44814 = parent;
component = G__44814;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__44629 = cljs.core.seq(descriptions);
var chunk__44630 = null;
var count__44631 = (0);
var i__44632 = (0);
while(true){
if((i__44632 < count__44631)){
var component = chunk__44630.cljs$core$IIndexed$_nth$arity$2(null, i__44632);
if(cljs.core.truth_(speclj.running.focused_QMARK_(component))){
speclj.running.enable_focus_mode_BANG_(component);

speclj.running.focus_children_BANG_(component);

speclj.running.focus_characteristics_BANG_(component);
} else {
}


var G__44815 = seq__44629;
var G__44816 = chunk__44630;
var G__44817 = count__44631;
var G__44818 = (i__44632 + (1));
seq__44629 = G__44815;
chunk__44630 = G__44816;
count__44631 = G__44817;
i__44632 = G__44818;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44629);
if(temp__5823__auto__){
var seq__44629__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44629__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44629__$1);
var G__44819 = cljs.core.chunk_rest(seq__44629__$1);
var G__44820 = c__5525__auto__;
var G__44821 = cljs.core.count(c__5525__auto__);
var G__44822 = (0);
seq__44629 = G__44819;
chunk__44630 = G__44820;
count__44631 = G__44821;
i__44632 = G__44822;
continue;
} else {
var component = cljs.core.first(seq__44629__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_(component))){
speclj.running.enable_focus_mode_BANG_(component);

speclj.running.focus_children_BANG_(component);

speclj.running.focus_characteristics_BANG_(component);
} else {
}


var G__44823 = cljs.core.next(seq__44629__$1);
var G__44824 = null;
var G__44825 = (0);
var G__44826 = (0);
seq__44629 = G__44823;
chunk__44630 = G__44824;
count__44631 = G__44825;
i__44632 = G__44826;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__44677 = cljs.core.seq(characteristics);
var chunk__44679 = null;
var count__44680 = (0);
var i__44681 = (0);
while(true){
if((i__44681 < count__44680)){
var characteristic = chunk__44679.cljs$core$IIndexed$_nth$arity$2(null, i__44681);
if(cljs.core.truth_(speclj.running.focused_QMARK_(characteristic))){
speclj.running.enable_focus_mode_BANG_(characteristic);


var G__44827 = seq__44677;
var G__44828 = chunk__44679;
var G__44829 = count__44680;
var G__44830 = (i__44681 + (1));
seq__44677 = G__44827;
chunk__44679 = G__44828;
count__44680 = G__44829;
i__44681 = G__44830;
continue;
} else {
var G__44831 = seq__44677;
var G__44832 = chunk__44679;
var G__44833 = count__44680;
var G__44834 = (i__44681 + (1));
seq__44677 = G__44831;
chunk__44679 = G__44832;
count__44680 = G__44833;
i__44681 = G__44834;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44677);
if(temp__5823__auto__){
var seq__44677__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44677__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44677__$1);
var G__44835 = cljs.core.chunk_rest(seq__44677__$1);
var G__44836 = c__5525__auto__;
var G__44837 = cljs.core.count(c__5525__auto__);
var G__44838 = (0);
seq__44677 = G__44835;
chunk__44679 = G__44836;
count__44680 = G__44837;
i__44681 = G__44838;
continue;
} else {
var characteristic = cljs.core.first(seq__44677__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_(characteristic))){
speclj.running.enable_focus_mode_BANG_(characteristic);


var G__44839 = cljs.core.next(seq__44677__$1);
var G__44840 = null;
var G__44841 = (0);
var G__44842 = (0);
seq__44677 = G__44839;
chunk__44679 = G__44840;
count__44680 = G__44841;
i__44681 = G__44842;
continue;
} else {
var G__44843 = cljs.core.next(seq__44677__$1);
var G__44844 = null;
var G__44845 = (0);
var G__44846 = (0);
seq__44677 = G__44843;
chunk__44679 = G__44844;
count__44680 = G__44845;
i__44681 = G__44846;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq(cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__44687_44847 = cljs.core.seq(descriptions);
var chunk__44688_44848 = null;
var count__44689_44849 = (0);
var i__44690_44850 = (0);
while(true){
if((i__44690_44850 < count__44689_44849)){
var description_44851 = chunk__44688_44848.cljs$core$IIndexed$_nth$arity$2(null, i__44690_44850);
speclj.running.scan_for_focus_BANG_(description_44851);


var G__44856 = seq__44687_44847;
var G__44857 = chunk__44688_44848;
var G__44858 = count__44689_44849;
var G__44859 = (i__44690_44850 + (1));
seq__44687_44847 = G__44856;
chunk__44688_44848 = G__44857;
count__44689_44849 = G__44858;
i__44690_44850 = G__44859;
continue;
} else {
var temp__5823__auto___44860 = cljs.core.seq(seq__44687_44847);
if(temp__5823__auto___44860){
var seq__44687_44861__$1 = temp__5823__auto___44860;
if(cljs.core.chunked_seq_QMARK_(seq__44687_44861__$1)){
var c__5525__auto___44862 = cljs.core.chunk_first(seq__44687_44861__$1);
var G__44863 = cljs.core.chunk_rest(seq__44687_44861__$1);
var G__44864 = c__5525__auto___44862;
var G__44865 = cljs.core.count(c__5525__auto___44862);
var G__44866 = (0);
seq__44687_44847 = G__44863;
chunk__44688_44848 = G__44864;
count__44689_44849 = G__44865;
i__44690_44850 = G__44866;
continue;
} else {
var description_44867 = cljs.core.first(seq__44687_44861__$1);
speclj.running.scan_for_focus_BANG_(description_44867);


var G__44868 = cljs.core.next(seq__44687_44861__$1);
var G__44869 = null;
var G__44870 = (0);
var G__44871 = (0);
seq__44687_44847 = G__44868;
chunk__44688_44848 = G__44869;
count__44689_44849 = G__44870;
i__44690_44850 = G__44871;
continue;
}
} else {
}
}
break;
}

var or__5002__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(speclj.running.focus_mode_QMARK_,descriptions));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__44691 = cljs.core.seq(components);
var chunk__44692 = null;
var count__44693 = (0);
var i__44694 = (0);
while(true){
if((i__44694 < count__44693)){
var component = chunk__44692.cljs$core$IIndexed$_nth$arity$2(null, i__44694);
var fexpr__44697_44872 = component.body;
(fexpr__44697_44872.cljs$core$IFn$_invoke$arity$0 ? fexpr__44697_44872.cljs$core$IFn$_invoke$arity$0() : fexpr__44697_44872.call(null, ));


var G__44873 = seq__44691;
var G__44874 = chunk__44692;
var G__44875 = count__44693;
var G__44876 = (i__44694 + (1));
seq__44691 = G__44873;
chunk__44692 = G__44874;
count__44693 = G__44875;
i__44694 = G__44876;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44691);
if(temp__5823__auto__){
var seq__44691__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44691__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44691__$1);
var G__44877 = cljs.core.chunk_rest(seq__44691__$1);
var G__44878 = c__5525__auto__;
var G__44879 = cljs.core.count(c__5525__auto__);
var G__44880 = (0);
seq__44691 = G__44877;
chunk__44692 = G__44878;
count__44693 = G__44879;
i__44694 = G__44880;
continue;
} else {
var component = cljs.core.first(seq__44691__$1);
var fexpr__44698_44881 = component.body;
(fexpr__44698_44881.cljs$core$IFn$_invoke$arity$0 ? fexpr__44698_44881.cljs$core$IFn$_invoke$arity$0() : fexpr__44698_44881.call(null, ));


var G__44882 = cljs.core.next(seq__44691__$1);
var G__44883 = null;
var G__44884 = (0);
var G__44885 = (0);
seq__44691 = G__44882;
chunk__44692 = G__44883;
count__44693 = G__44884;
i__44694 = G__44885;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq(fns)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fns),(function (){var G__44699 = base;
var G__44700 = cljs.core.rest(fns);
return (speclj.running.nested_fns.cljs$core$IFn$_invoke$arity$2 ? speclj.running.nested_fns.cljs$core$IFn$_invoke$arity$2(G__44699,G__44700) : speclj.running.nested_fns.call(null, G__44699,G__44700));
})());
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components(befores);

try{return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null, ));
}finally {speclj.running.eval_components(afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__44708 = cljs.core.seq(withs);
var chunk__44709 = null;
var count__44710 = (0);
var i__44711 = (0);
while(true){
if((i__44711 < count__44710)){
var with$ = chunk__44709.cljs$core$IIndexed$_nth$arity$2(null, i__44711);
speclj.components.reset_with(with$);


var G__44886 = seq__44708;
var G__44887 = chunk__44709;
var G__44888 = count__44710;
var G__44889 = (i__44711 + (1));
seq__44708 = G__44886;
chunk__44709 = G__44887;
count__44710 = G__44888;
i__44711 = G__44889;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44708);
if(temp__5823__auto__){
var seq__44708__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44708__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44708__$1);
var G__44890 = cljs.core.chunk_rest(seq__44708__$1);
var G__44891 = c__5525__auto__;
var G__44892 = cljs.core.count(c__5525__auto__);
var G__44893 = (0);
seq__44708 = G__44890;
chunk__44709 = G__44891;
count__44710 = G__44892;
i__44711 = G__44893;
continue;
} else {
var with$ = cljs.core.first(seq__44708__$1);
speclj.components.reset_with(with$);


var G__44894 = cljs.core.next(seq__44708__$1);
var G__44895 = null;
var G__44896 = (0);
var G__44897 = (0);
seq__44708 = G__44894;
chunk__44709 = G__44895;
count__44710 = G__44896;
i__44711 = G__44897;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__44898 = cljs.core.deref(description__$1.parent);
var G__44899 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(description__$1) : getter.call(null, description__$1)),components);
description__$1 = G__44898;
components = G__44899;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since(start_time),failure], null));
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result_constructor,present_args);
speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2(result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref(characteristic.parent);
var befores = speclj.running.collect_components((function (p1__44721_SHARP_){
return cljs.core.deref(p1__44721_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components((function (p1__44722_SHARP_){
return cljs.core.deref(p1__44722_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic(befores,core_body,afters);
});
var arounds = speclj.running.collect_components((function (p1__44723_SHARP_){
return cljs.core.deref(p1__44723_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns(before_and_after_body,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44724_SHARP_){
return p1__44724_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components((function (p1__44725_SHARP_){
return cljs.core.deref(p1__44725_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time();
try{(full_body.cljs$core$IFn$_invoke$arity$0 ? full_body.cljs$core$IFn$_invoke$arity$0() : full_body.call(null, ));

return speclj.running.report_result(speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e44726){var e = e44726;
if(speclj.platform.pending_QMARK_(e)){
return speclj.running.report_result(speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result(speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs(withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function speclj$running$do_characteristics_$_iter__44734(s__44735){
return (new cljs.core.LazySeq(null,(function (){
var s__44735__$1 = s__44735;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__44735__$1);
if(temp__5823__auto__){
var s__44735__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44735__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__44735__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__44737 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__44736 = (0);
while(true){
if((i__44736 < size__5479__auto__)){
var characteristic = cljs.core._nth(c__5478__auto__,i__44736);
if(cljs.core.truth_(speclj.running.can_run_QMARK_(characteristic))){
cljs.core.chunk_append(b__44737,speclj.running.do_characteristic(characteristic,reporters));

var G__44900 = (i__44736 + (1));
i__44736 = G__44900;
continue;
} else {
var G__44901 = (i__44736 + (1));
i__44736 = G__44901;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44737),speclj$running$do_characteristics_$_iter__44734(cljs.core.chunk_rest(s__44735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44737),null);
}
} else {
var characteristic = cljs.core.first(s__44735__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_(characteristic))){
return cljs.core.cons(speclj.running.do_characteristic(characteristic,reporters),speclj$running$do_characteristics_$_iter__44734(cljs.core.rest(s__44735__$2)));
} else {
var G__44902 = cljs.core.rest(s__44735__$2);
s__44735__$1 = G__44902;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref(context.children);
while(true){
if(cljs.core.seq(children)){
var G__44903 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(results__$1,(function (){var G__44773 = cljs.core.first(children);
var G__44774 = reporters;
return (speclj.running.do_description.cljs$core$IFn$_invoke$arity$2 ? speclj.running.do_description.cljs$core$IFn$_invoke$arity$2(G__44773,G__44774) : speclj.running.do_description.call(null, G__44773,G__44774));
})());
var G__44904 = cljs.core.rest(children);
results__$1 = G__44903;
children = G__44904;
continue;
} else {
speclj.running.eval_components(cljs.core.deref(context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1(speclj.tags.tags_for(context)))){
return speclj.running.do_characteristics(cljs.core.deref(context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(description.withs),cljs.core.deref(description.with_alls));
var ns = clojure.string.replace(description.ns,"-","_");
var var_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44777_SHARP_){
return [ns,".",cljs.core.name(p1__44777_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44778_SHARP_){
return [ns,".",cljs.core.name(p1__44778_SHARP_.unique_name)].join('');
}),withs);
var seq__44779_44905 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(var_names,unique_names)));
var chunk__44780_44906 = null;
var count__44781_44907 = (0);
var i__44782_44908 = (0);
while(true){
if((i__44782_44908 < count__44781_44907)){
var vec__44789_44909 = chunk__44780_44906.cljs$core$IIndexed$_nth$arity$2(null, i__44782_44908);
var n_44910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44789_44909,(0),null);
var un_44911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44789_44909,(1),null);
var code_44912 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_44910)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_44911),";"].join('');
eval(code_44912);


var G__44913 = seq__44779_44905;
var G__44914 = chunk__44780_44906;
var G__44915 = count__44781_44907;
var G__44916 = (i__44782_44908 + (1));
seq__44779_44905 = G__44913;
chunk__44780_44906 = G__44914;
count__44781_44907 = G__44915;
i__44782_44908 = G__44916;
continue;
} else {
var temp__5823__auto___44917 = cljs.core.seq(seq__44779_44905);
if(temp__5823__auto___44917){
var seq__44779_44918__$1 = temp__5823__auto___44917;
if(cljs.core.chunked_seq_QMARK_(seq__44779_44918__$1)){
var c__5525__auto___44919 = cljs.core.chunk_first(seq__44779_44918__$1);
var G__44920 = cljs.core.chunk_rest(seq__44779_44918__$1);
var G__44921 = c__5525__auto___44919;
var G__44922 = cljs.core.count(c__5525__auto___44919);
var G__44923 = (0);
seq__44779_44905 = G__44920;
chunk__44780_44906 = G__44921;
count__44781_44907 = G__44922;
i__44782_44908 = G__44923;
continue;
} else {
var vec__44792_44924 = cljs.core.first(seq__44779_44918__$1);
var n_44925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44792_44924,(0),null);
var un_44926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44792_44924,(1),null);
var code_44927 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_44925)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_44926),";"].join('');
eval(code_44927);


var G__44928 = cljs.core.next(seq__44779_44918__$1);
var G__44929 = null;
var G__44930 = (0);
var G__44931 = (0);
seq__44779_44905 = G__44928;
chunk__44780_44906 = G__44929;
count__44781_44907 = G__44930;
i__44782_44908 = G__44931;
continue;
}
} else {
}
}
break;
}

try{return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null, ));
}finally {var seq__44795_44932 = cljs.core.seq(var_names);
var chunk__44796_44933 = null;
var count__44797_44934 = (0);
var i__44798_44935 = (0);
while(true){
if((i__44798_44935 < count__44797_44934)){
var vec__44805_44936 = chunk__44796_44933.cljs$core$IIndexed$_nth$arity$2(null, i__44798_44935);
var n_44937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44805_44936,(0),null);
var code_44938 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_44937)," = null;"].join('');
eval(code_44938);


var G__44939 = seq__44795_44932;
var G__44940 = chunk__44796_44933;
var G__44941 = count__44797_44934;
var G__44942 = (i__44798_44935 + (1));
seq__44795_44932 = G__44939;
chunk__44796_44933 = G__44940;
count__44797_44934 = G__44941;
i__44798_44935 = G__44942;
continue;
} else {
var temp__5823__auto___44943 = cljs.core.seq(seq__44795_44932);
if(temp__5823__auto___44943){
var seq__44795_44944__$1 = temp__5823__auto___44943;
if(cljs.core.chunked_seq_QMARK_(seq__44795_44944__$1)){
var c__5525__auto___44945 = cljs.core.chunk_first(seq__44795_44944__$1);
var G__44946 = cljs.core.chunk_rest(seq__44795_44944__$1);
var G__44947 = c__5525__auto___44945;
var G__44948 = cljs.core.count(c__5525__auto___44945);
var G__44949 = (0);
seq__44795_44932 = G__44946;
chunk__44796_44933 = G__44947;
count__44797_44934 = G__44948;
i__44798_44935 = G__44949;
continue;
} else {
var vec__44808_44950 = cljs.core.first(seq__44795_44944__$1);
var n_44951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44808_44950,(0),null);
var code_44952 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_44951)," = null;"].join('');
eval(code_44952);


var G__44953 = cljs.core.next(seq__44795_44944__$1);
var G__44954 = null;
var G__44955 = (0);
var G__44956 = (0);
seq__44795_44932 = G__44953;
chunk__44796_44933 = G__44954;
count__44797_44934 = G__44955;
i__44798_44935 = G__44956;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context(description,reporters);
return speclj.running.do_child_contexts(description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
var fexpr__44812 = speclj.running.nested_fns(run_characteristics_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44811_SHARP_){
return p1__44811_SHARP_.body;
}),cljs.core.deref(description.around_alls)));
return (fexpr__44812.cljs$core$IFn$_invoke$arity$0 ? fexpr__44812.cljs$core$IFn$_invoke$arity$0() : fexpr__44812.call(null, ));
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_(description))){
var tag_sets = speclj.tags.tag_sets_for(description);
if(cljs.core.truth_(cljs.core.some(speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_(reporters,description);

return speclj.running.with_withs_bound(description,(function (){
speclj.running.eval_components(cljs.core.deref(description.before_alls));

try{return speclj.running.with_around_alls(description,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs(cljs.core.deref(description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result(e);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2(error_result,speclj.config.active_reporters());
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_44958 = (function (this$,directories,reporters){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.run_directories[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,directories,reporters) : m__5351__auto__.call(null, this$,directories,reporters));
} else {
var m__5349__auto__ = (speclj.running.run_directories["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,directories,reporters) : m__5349__auto__.call(null, this$,directories,reporters));
} else {
throw cljs.core.missing_protocol("Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_44958(this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_44959 = (function (this$,description){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.submit_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__5351__auto__.call(null, this$,description));
} else {
var m__5349__auto__ = (speclj.running.submit_description["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__5349__auto__.call(null, this$,description));
} else {
throw cljs.core.missing_protocol("Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_44959(this$,description);
}
});

var speclj$running$Runner$run_description$dyn_44960 = (function (this$,description,reporters){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.run_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,description,reporters) : m__5351__auto__.call(null, this$,description,reporters));
} else {
var m__5349__auto__ = (speclj.running.run_description["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,description,reporters) : m__5349__auto__.call(null, this$,description,reporters));
} else {
throw cljs.core.missing_protocol("Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_44960(this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_44961 = (function (this$,reporters){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.running.run_and_report[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,reporters) : m__5351__auto__.call(null, this$,reporters));
} else {
var m__5349__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,reporters) : m__5349__auto__.call(null, this$,reporters));
} else {
throw cljs.core.missing_protocol("Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_44961(this$,reporters);
}
});


//# sourceMappingURL=speclj.running.js.map
