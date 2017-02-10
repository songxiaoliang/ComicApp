/**
 * 数值工具类
 * Songlcy create by 2017-01-11
 * @flow
 */

let NumberUtil = {

    // 根据范围值产生随机数
    getRandom: (minNum, maxNum) => {
        var range = maxNum - minNum;
        var rand = Math.random();
        var result = minNum + Math.round(range * rand);
        return result;
    }

}

export default NumberUtil;