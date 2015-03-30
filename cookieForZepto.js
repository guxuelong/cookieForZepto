/**
 * cookie pligin for zepto
 * @author 	guxuelong(顾学龙)
 * @version 	1.0.0
 *
 * options
 *		expires: 定义cookie的有效时间，默认''
 *				 s是指秒，  如20秒就是20s
 *				 h是指小时，如12小时是h12 
 *				 d是指天数，如30天就是d30
 *      path: 
 *          	 定义cookie的有效路径,默认为''
 *      secure:  默认值：false。如果为true，cookie的传输需要使用安全协议（HTTPS）
 *      raw:     默认情况下，读取和写入 cookie 的时候自动进行编码和解码.要关闭这个功能设置 raw: true 即可 
 *
 */
;
(function($) {
	$.cookie = function(key, value, options) {
		var opts;
		// 设置cookie
		var val = String(value);
		if (arguments.length > 1 && val !== "[object Object]") {
			var expiresTime, num, type, strsec = 0,exp = new Date();
			opts = $.extend({}, $.cookie.defaults, options);
			expiresTime = {null:"d-1",undefined:"d-1"}[value]||opts.expires;
			expiresTime != '' && (num = expiresTime.substring(1, expiresTime.length) * 1, type = expiresTime.substring(0, 1), strsec = {'s':num * 1000,'h': num * 60 * 60 * 1000,'d':num * 24 * 60 * 60 * 1000}[type], exp.setTime(exp.getTime() + strsec * 1), expiresTime = ";expires=" + exp.toGMTString());
			return (document.cookie = [
				encodeURIComponent(key), '=',
				opts.raw ? val : encodeURIComponent(val),
				expiresTime,
				opts.path ? '; path=' + opts.path : '',
				opts.secure ? '; secure' : ''
			].join(''))
		}
		// 获取cookie
		opts = $.extend({}, $.cookie.defaults, value);
		return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? {true:result[1],false:decodeURIComponent(result[1])}[opts.raw] : null
	};

	$.cookie.defaults = {
		expires: '',
		path: '',
		secure: false,
		raw: false
	};
})(Zepto)