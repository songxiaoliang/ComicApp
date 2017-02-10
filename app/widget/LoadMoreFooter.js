/**
 * ListView Footer
 * Songlcy create by 2017-01-16
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';

import { loadingMoreFooterStyle } from './../style/loadingFooterStyle';

export default class LoadingMoreFooter extends Component {

    render() {
        return (
            <View style={loadingMoreFooterStyle.container}>
                <ActivityIndicator />
                <Text style={loadingMoreFooterStyle.title}>正在加载更多...</Text>
            </View >
        )
    }
}