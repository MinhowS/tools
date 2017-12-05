/**
 *
 * @desc 判断dom元素是否含有某个类
 * @param dom--dom元素
 * @param cls--类名(字符串，例如："app")
 * @returns {boolean}--true/false
 */
function hasClass(dom, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(dom.className);
}