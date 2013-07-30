//
//	methodzero.js 0.0.0.1
//	2013.07.15.
//	kang hwan ki
//
;(function(){

// -------------------------------------------------
//	private
//	namespace : '_mz_'
// -------------------------------------------------
var _mz_ 	= _mz_ || {};

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

// -------------------------------------------------

var root 	= this;
var mz 		= {
	VERSION : "0.0.0.1",
};

// logger
mz.log = {
	level:0,
	DEBUG:1,
	INFO:2,
	WARN:3,
	ERROR:4,
	FATAL:5
};

mz.log.level = function(level) {

};

mz.log.debug = function(){
	var arg 	= arguments,
		print 	= function(data) {
		console.log(data);
	};

	console.groupCollapsed("[DEBUG]"+ _mz_.now(" MM월DD일 HH시MI분"));
	mz.core.each(arg, print);
	console.groupEnd();
};

// --------------------------------------------------
//	core
// --------------------------------------------------
mz.core = {
	BREAK : {}
};

//
mz.core.each = function(collection, filter, context) {
	if(collection.length === collection.length+0) {
		for(var i=0,l=collection.length; i<l; i++) {
			if (filter.call(context, collection[i], i, collection) === mz.core.BREAK)
				return;
		}
	} else {
		for(var key in collection) {
			if (filter.call(context, collection[key], key, collection) === mz.core.BREAK)
				return;
		}
	}
};

//
mz.core.typeof = function(object,target){
	return _mz_.toString(object).indexOf(target) > 0;
};

mz.core.each(
	["Object","String","Number","Array","Boolean"],
	function(data){
		mz.core["is"+data] = function(target) {
			return mz.core.typeof(target, data);
		};
	}
);


// - alias -----------------------------------------
mz.core.each(mz.core, function(v,k){ mz[k] = v; }, mz);

mz.debug 	= mz.log.debug;

root.mz 	= mz;


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


}).call(this);