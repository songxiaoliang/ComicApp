/**
 * Loading
 * Songlcy create by 2017-01-16
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    Image
} from 'react-native';

import {loadingStyle} from './../style/loadingStyle';

export default class Loading extends Component {

    render() {
        return (
            <View style={loadingStyle.container}>
                <Image source={require('./../images/ic_loading.gif')} style={loadingStyle.img} />
                <Text style={loadingStyle.title}>加载中...</Text>
            </View>
        )
    }
}