
/**
 * Splash
 * Songlcy create by 2017-01-11
 * @flow
 */
import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';
import NumberUtil from './../../utils/NumberUtil';
import Main from './../main/main';

let splashImgs = [
    require('./../../images/ic_splash_1.jpg'),
    require('./../../images/ic_splash_2.jpg'),
    require('./../../images/ic_splash_3.jpg'),
    require('./../../images/ic_splash_4.jpg')
];

export default class Splash extends Component {

    // 倒计时2秒后进入首页
    componentDidMount() {
        setTimeout(() => {
            this.props.navigator.replace({
                name: "main",
                component: Main
            });
        }, 2000);
    }

    render() {
        let {width, height} = Dimensions.get("window");
        let randomNum = NumberUtil.getRandom(0, splashImgs.length - 1);
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={true} />
                <Image source={splashImgs[randomNum]} resizeMode={'cover'} style={{ width: width, height: height }} />
            </View>
        )
    }
}