//
//	methodzero.js 0.0.0.1
//	2013.07.15.
//	kang hwan ki
//
;(function(){

"use strict";
var root 	= this;
var mz 		= {};
var _mz_ 	= _mz_ || {};

// -------------------------------------------------
//	private
//	namespace : '_mz_'
// -------------------------------------------------
_mz_.toString = function(o) {
	return Object.prototype.toString.call(o);
};

_mz_.now = function(fmt) {
	var dt 	= new Date();
	fmt 	= fmt || "YYYY/MM/DD HH:MI:SS:MS";
	return fmt.replace("YYYY",dt.getFullYear())
	.replace("YY",dt.getFullYear().toString().substring(2))
	.replace("MM",(dt.getMonth() + 1))
	.replace("DD",dt.getDate())
	.replace("HH",dt.getHours())
	.replace("MI",dt.getMinutes())
	.replace("SS",dt.getSeconds())
	.replace("MS",dt.getMilliseconds());
};

_mz_.document = function() {
	return _mz_.doc = _mz_.doc || (window ? window.document : undefined);
};

mz.VERSION = "0.0.0.1";

// log4js
mz.log = {level:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,FATAL:5};
mz.log.level = function(level){};
mz.log.debug = function(){
	var arg = arguments;
	console.groupCollapsed("[DEBUG]"+ _mz_.now(" MM월DD일 HH시MI분"));
	mz.core.each(
		arg,
		function(c,i){
			console.log(c);
		}
	);
	console.groupEnd();
};

// --------------------------------------------------
//	core
// --------------------------------------------------
mz.core = {};
mz.core.BREAK = {};

//
mz.core.each = function(collection, filter, context) {
	if(collection.length === collection.length+0) {
		for(var i=0,l=collection.length; i<l; i++){
			if (filter.call(context, collection[i], i, collection) === mz.core.BREAK) return;
		}
	} else {
		for(var key in collection) {
			if (filter.call(context, collection[key], key, collection) === mz.core.BREAK) return;
		}
	}
};

// -------------------------------------------------
//	util
// -------------------------------------------------
mz.util = {};
//
mz.util.typeof = function(o,t){
	return _mz_.toString(o).indexOf(t) > 0;
};

//
mz.core.each(
	["Object","String","Number","Array","Boolean"],
	function(data){
		mz.util["is"+data] = function(t) {
			return mz.util.typeof(t, data);
		};
	}
);

// -------------------------------------------------
//	document
// -------------------------------------------------
mz.doc = {};

//
mz.doc.get = function(s) {
	var doc = _mz_.document();
	var el 	= doc.getElementById(s);
	if(el) return el;
	el = doc.getElementsByName(s);
	if(el.length>0) return el;
	el = doc.getElementsByTagName(s);
	if(el.length>0) return el;
	return null;
};

// -------------------------------------------------
//	alias
// -------------------------------------------------
mz.core.each(mz.core, function(v,k){ mz[k] = v; }, mz);

root.mz = mz;

}).call(this);