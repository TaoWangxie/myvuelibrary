exports.install = function(Vue, options) {
    Vue.prototype.$back = function() { //全局函数1
        console.log("全局函数1")
    };
    Vue.prototype.$pushH = function() { //全局函数2
        console.log("全局函数2")
    };
    Vue.prototype.$pushHN = function() { //全局函数3
        console.log("全局函数3")
    };
};