/**
 * [randomNum description]生成指定范围[min,max]的随机整数数，包括min和max
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
function randomNum(min,max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}