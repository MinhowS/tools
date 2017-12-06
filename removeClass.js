/**
 *
 * @desc 移除dom元素的class
 * @param dom--dom元素
 * @param cls--{String}
 */
function removeClass(dom, cls) {
    if (hasClass(dom, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        dom.className = dom.className.replace(reg,' ');
    }
}