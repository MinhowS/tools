/**
 *
 * @desc 为dom元素添加类，依赖hasClass
 * @param dom--多么元素
 * @param cls--{String}
 */
function addClass(dom, cls) {
    if (!hasClass(dom, cls)) {
        dom.className += ' ' + cls;
    }
}