//
//	automatakr.js 0.0.0.1
//	2013.07.15.
//	kang hwan ki
//
;(function(){

var BASE_CODE = 0xac00;
var LIMIT_MIN = 0xac00;
var LIMIT_MAX = 0xd7a3;
var HS_FIRST = 0;
var HS_FIRST_V = 1;
var HS_FIRST_C = 2;
var HS_MIDDLE_STATE = 3;
var HS_END = 4;
var HS_END_STATE = 5;
var HS_END_EXCEPTION = 6;
var KEY_CODE_SPACE = -1;
var KEY_CODE_ENTER = -2;
var KEY_CODE_BACKSPACE = -3;

var SOUND_TABLE = [
	"ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ",
	"ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ",
	" ","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"
];
var MIXED_CHO_CONSON = [
	[0,0,15],
	[15,0,1],
	[1,0,0],
	[3,3,16],
	[16,3,4],
	[4,3,3],
	[7,7,17],
	[17,7,8],
	[8,7,7],
	[9,9,10],
	[10,9,9],
	[12,12,14],
	[14,12,13],
	[13,12,12]
];
var MIXED_JONG_CONSON = [
	[41,41,64],
	[64,41,42],
	[42,41,41],
	[41,59,43],
	[44,62,45],
	[44,67,46],
	[47,47,65],
	[65,47,47],
	[48,41,49],
	[48,56,50],
	[48,57,51],
	[51,57,54],
	[48,59,52],
	[48,47,53],
	[48,67,55],
	[57,57,66],
	[66,57,57],
	[57,59,58],
	[59,59,60],
	[60,59,59],
	[62,62,63],
	[63,62,62]
];
var DIVIDE_JONG_CONSON = [
	[41,41,42],
	[41,59,43],
	[44,62,45],
	[44,67,46],
	[48,41,49],
	[48,56,50],
	[48,57,51],
	[51,66,54],
	[48,59,52],
	[48,65,53],
	[48,67,55],
	[57,59,58],
	[59,59,60]
];

var root = this;
var amkr = root.automatakr = {};

amkr.VERSION = "0.0.0.1";
amkr.m_nPhonemez = [];
amkr.m_nStatus = 0;
amkr.ingWord = "";
amkr.completeText = "";
amkr.m_completeWord = "";

amkr.clear = function() {
	console.dir(this);
};

})(this);