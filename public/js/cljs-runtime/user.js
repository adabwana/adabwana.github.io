goog.provide('user');
user.reload_BANG_ = (function user$reload_BANG_(){
console.log("Code updated.");

return adabwana.core.init();
});
user.after_load = (function user$after_load(){
console.log("Hot reload");

return user.reload_BANG_();
});

//# sourceMappingURL=user.js.map
