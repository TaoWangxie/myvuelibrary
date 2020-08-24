
export function getLang() {
    console.log(2222)
}
/**
 * 根据时间戳格式化时间
 */
export function dateFormat(thisDate, fmt) {
    var o = {
        "M+": thisDate.getMonth() + 1,
        "d+": thisDate.getDate(),
        "h+": thisDate.getHours(),
        "m+": thisDate.getMinutes(),
        "s+": thisDate.getSeconds(),
        "q+": Math.floor((thisDate.getMonth() + 3) / 3),
        "S": thisDate.getMilliseconds()
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (thisDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 防抖函数
 */
export function debounce(fn,delay){
    let timer = null //借助闭包
    return function(...args) {
        let that = this
        clearTimeout(timer) 
        timer = setTimeout(function(){
            fn.apply(that,args)
        },delay)
    }
}

/**
 * @desc 函数节流
 * @param fn 函数
 * @param interval 函数执行间隔时间毫秒数 默认1s
 */
export function throttle(fn, interval) {
    var last;
    var timer;
    var interval = interval || 1000;
    return function () {
            console.log("调用了throttle方法")
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }
}