
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
