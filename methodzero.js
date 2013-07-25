//
//	methodzero.js 0.0.0.1
//	2013.07.15.
//	kang hwan ki
//
;(function(){ "use strict";

var root 	= this;
var mz 		= root.mz = {};

mz.VERSION = "0.0.0.1";
mz.core = {};
mz.util = {};
mz.doc = {};

mz.core.BREAK = {};

// --------------------------------------------------
//	logger
// --------------------------------------------------

mz.debug = function(){
	var arg = arguments;
	console.groupCollapsed("[DEBUG]"+ _mz_.now(" MM월DD일 HH시MI분"));
	mz.core.loop(arg,function(c,i){
		console.log(c);
	});
	console.groupEnd();
};


// --------------------------------------------------
//	core
// --------------------------------------------------

//
//
mz.core.loop = function(c, f, context) {
	if(c.length === c.length+0) {
		for(var i=0,l=c.length; i<l; i++){
			if (f.call(context, c[i], i, c) === mz.core.BREAK)
				return;
		}
	} else {
		for(var key in c) {
			if (f.call(context, c[key], key, c) === mz.core.BREAK)
				return;
		}
	}
};

// -------------------------------------------------
//	util
// -------------------------------------------------

//
//
mz.util.typeof = function(o,t){
	return _mz_.toString(o).indexOf(t) > 0;
};

//
//
mz.core.loop(
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

//
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
mz.core.loop(
	mz.core,
	function(o,k){
		mz[k] = o;
	},
	mz
);

// -------------------------------------------------
//	private
//	namespace : '_mz_'
// -------------------------------------------------
var _mz_ 	= _mz_ || {};
_mz_.toString = function(t) {
	return Object.prototype.toString.call(t);
};

_mz_.now = function(fmt) {
	var dt 	= new Date();
	fmt 		= fmt || "YYYY/MM/DD HH:MI:SS:MS";
	return fmt.replace("YYYY",dt.getFullYear()).replace("YY", dt.getFullYear().toString().substring(2)).replace("MM", (dt.getMonth() + 1)).replace("DD", dt.getDate()).replace("HH", dt.getHours()).replace("MI", dt.getMinutes()).replace("SS", dt.getSeconds()).replace("MS", dt.getMilliseconds());
};

_mz_.document = function() {
	return _mz_.doc = _mz_.doc || (window ? window.document : undefined);
};


}).call(this);